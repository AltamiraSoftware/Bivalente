
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient } from "@/lib/resendClient";

export const runtime = "nodejs";     // Requerido por Stripe para validar firmas
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Convertir ReadableStream a Buffer (App Router)
async function getRawBody(req) {
  const reader = req.body.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

export async function POST(req) {
  let event;
  let rawBody;

  try {
    rawBody = await getRawBody(req);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("❌ No se pudo leer el body del webhook:", err.message);
    }
    return new NextResponse("Bad Request", { status: 400 });
  }

  const signature = req.headers.get("stripe-signature");

  // 1. Validar firma
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("⛔ Firma inválida:", err.message);
    }
    return new NextResponse("Signature error", { status: 400 });
  }

  // 2. Solo procesamos pagos completados
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object;

  // 3. Extraer metadata obligatoria
  const {
    id_cliente,
    id_profesional,
    id_servicio,
    id_franja_disponibilidad
  } = session.metadata || {};

  if (!id_cliente || !id_profesional || !id_servicio || !id_franja_disponibilidad) {
    return NextResponse.json({ error: "Metadata incompleta" }, { status: 400 });
  }

  const supabase = supabaseAdmin;

  // 4. Obtener franja
  const { data: franja, error: frError } = await supabase
    .from("franjas_disponibilidad")
    .select("*")
    .eq("id", id_franja_disponibilidad)
    .single();

  if (frError || !franja) {
    return NextResponse.json({ error: "Franja no encontrada" }, { status: 400 });
  }

  // 5. Obtener servicio
  const { data: servicio, error: servError } = await supabase
    .from("servicios")
    .select("*")
    .eq("id", id_servicio)
    .single();

  if (servError || !servicio) {
    return NextResponse.json({ error: "Servicio no encontrado" }, { status: 400 });
  }

  // 6. Crear la cita
  const { data: cita, error: citaError } = await supabase
    .from("citas_sesiones")
    .insert({
      id_cliente,
      id_profesional,
      id_servicio,
      id_franja_disponibilidad,
      hora_inicio: franja.hora_inicio,
      hora_fin: franja.hora_fin,
      precio_acordado: servicio.precio,
      estado_cita: "confirmada",
      estado_pago: "pagado",
      notas_cliente: "",
    })
    .select()
    .single();

  if (citaError) {
    if (process.env.NODE_ENV === "development") {
      console.error("❌ Error creando cita:", citaError.message);
    }
    return NextResponse.json({ error: "Error creando cita" }, { status: 500 });
  }

  // 7. Bloquear franja
  await supabase
    .from("franjas_disponibilidad")
    .update({ esta_disponible: false })
    .eq("id", id_franja_disponibilidad);

  // 8. Registrar pago (CORREGIDO según tu tabla)
  const { error: pagoError } = await supabase.from("pagos").insert({
    id_cliente,
    id_cita_sesion: cita.id,
    monto: servicio.precio,
    metodo_pago: "stripe",
    referencia_pago: session.id,
    estado_pago: "pagado",
  });

  if (pagoError && process.env.NODE_ENV === "development") {
    console.error("❌ Error registrando pago:", pagoError.message);
    // No detenemos el proceso: la cita ya está creada
  }

  // 9. Enviar emails
  const { data: cliente } = await supabase
    .from("perfiles_usuarios")
    .select("nombre_completo, email")
    .eq("id", id_cliente)
    .single();

  const { data: profesional } = await supabase
    .from("perfiles_usuarios")
    .select("nombre_completo, email")
    .eq("id", id_profesional)
    .single();

  const fecha = new Date(franja.hora_inicio).toLocaleDateString("es-ES");
  const hora = new Date(franja.hora_inicio).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let resend = null;

  try {
    resend = getResendClient();
  } catch (emailError) {
    console.error("Resend no disponible:", emailError.message);
  }

 // Email paciente
if (cliente?.email && resend) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: cliente.email,
    subject: "Cita confirmada",
    html: `
      <h2>Cita Confirmada</h2>
      <p>Hola ${cliente.nombre_completo},</p>
      <p>Tu cita de <strong>${servicio.nombre}</strong> ha sido confirmada.</p>
      <p><strong>${fecha} — ${hora}</strong></p>
    `,
  });
}

// Email profesional
if (profesional?.email && resend) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: profesional.email,
    subject: "Nueva cita reservada",
    html: `
      <h2>Nueva cita reservada</h2>
      <p><strong>Paciente:</strong> ${cliente?.nombre_completo}</p>
      <p><strong>Servicio:</strong> ${servicio.nombre}</p>
      <p><strong>${fecha} — ${hora}</strong></p>
      <p>Estado del pago: <strong>PAGADO</strong></p>
    `,
  });
}
  // 10. Responder a Stripe
  return NextResponse.json({ received: true });
}

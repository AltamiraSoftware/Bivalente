import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getResendClient } from "@/lib/resendClient";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) throw new Error("Body inválido");

    // ⚠️ NO convertir a número — IDs pueden ser UUID o texto
    const id_cliente = body.id_cliente;
    const id_profesional = body.id_profesional;
    const id_franja = body.id_franja;
    const id_servicio = body.id_servicio;
    const notas = body.notas ?? "";
    const pago = body.pago ?? null;

    

    if (!id_cliente || !id_profesional || !id_franja || !id_servicio) {
      throw new Error("Faltan datos obligatorios");
    }

    const supabase = supabaseAdmin;

    /* ==============================
       1. FRANJA
    =============================== */
    const { data: franja, error: franjaError } = await supabase
      .from("franjas_disponibilidad")
      .select("*")
      .eq("id", id_franja)
      .single();

    if (franjaError || !franja) {
      console.error("Error franja:", franjaError);
      throw new Error("Franja no encontrada");
    }

    const fecha = new Date(franja.hora_inicio).toLocaleDateString("es-ES");
    const hora = new Date(franja.hora_inicio).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    /* ==============================
       2. SERVICIO
    =============================== */
    const { data: servicio, error: servicioError } = await supabase
      .from("servicios")
      .select("*")
      .eq("id", id_servicio)
      .single();

    if (servicioError || !servicio) {
      console.error("Error servicio:", servicioError);
      throw new Error("Servicio no encontrado");
    }

    /* ==============================
       3. CREAR CITA
    =============================== */
    const { data: cita, error: citaError } = await supabase
      .from("citas_sesiones")
      .insert({
        id_cliente,
        id_profesional,
        id_franja_disponibilidad: id_franja,
        id_servicio,
        hora_inicio: franja.hora_inicio,
        hora_fin: franja.hora_fin,
        precio_acordado: servicio.precio,
        estado_cita: pago ? "confirmada" : "reservada",
        estado_pago: pago ? "pagado" : "pendiente",
        notas_cliente: notas,
      })
      .select()
      .single();

    if (citaError) {
      console.error("Error creando cita:", citaError);
      throw new Error("Error creando la cita");
    }

    /* ==============================
       4. ACTUALIZAR FRANJA
    =============================== */
    await supabase
      .from("franjas_disponibilidad")
      .update({ esta_disponible: false })
      .eq("id", id_franja);

    /* ==============================
       5. REGISTRAR PAGO SI PROCEDE
    =============================== */
    if (pago) {
      await supabase.from("pagos").insert({
        id_cliente,
        id_cita_sesion: cita.id,
        cantidad: pago.cantidad,
        metodo: pago.metodo,
        estado_pago: "pagado",
        stripe_session_id: pago.stripe_session_id ?? null,
      });
    }

    /* ==============================
       6. DATOS CLIENTE / PROFESIONAL
    =============================== */
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

    let resend = null;

    try {
      resend = getResendClient();
    } catch (emailError) {
      console.error("Resend no disponible:", emailError.message);
    }

    /* ==============================
       7. EMAIL CLIENTE
    =============================== */
    if (cliente?.email && resend) {
      resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: cliente.email,
        subject: pago ? "Cita confirmada" : "Cita reservada",
        html: `
          <h2>${pago ? "Cita confirmada" : "Cita reservada"}</h2>
          <p>Hola ${cliente.nombre_completo},</p>
          <p>Tu cita de <strong>${servicio.nombre}</strong> ha sido registrada.</p>
          <p><strong>${fecha} — ${hora}</strong></p>
        `,
      });
    }

    /* ==============================
       8. EMAIL PROFESIONAL
    =============================== */
    if (profesional?.email && resend) {
      resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: profesional.email,
        subject: "Nueva cita reservada",
        html: `
          <h2>Nueva cita reservada</h2>
          <p><strong>Paciente:</strong> ${cliente?.nombre_completo ?? "N/A"}</p>
          <p><strong>Servicio:</strong> ${servicio.nombre}</p>
          <p><strong>${fecha} — ${hora}</strong></p>
          <p><strong>Pago:</strong> ${pago ? "Pagado" : "Pendiente"}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, cita });
  } catch (err) {
   
    return NextResponse.json(
      { success: false, error: err.message ?? "Error desconocido" },
      { status: 500 }
    );
  }
}

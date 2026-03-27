// app/api/cliente/crear-sesion-pago/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { getBaseUrl } from "@/lib/getBaseUrl";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json({ error: "Body inválido" }, { status: 400 });
    }

    const { id_cliente, id_servicio, id_franja } = body;

    if (!id_cliente || !id_servicio || !id_franja) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    // 1. Obtener servicio
    const { data: servicio, error: servError } = await supabaseAdmin
      .from("servicios")
      .select("id, nombre, precio")
      .eq("id", id_servicio)
      .single();

    if (servError || !servicio) {
      return NextResponse.json({ error: "Servicio no encontrado" }, { status: 404 });
    }

    // 2. Obtener franja
    const { data: franja, error: frError } = await supabaseAdmin
      .from("franjas_disponibilidad")
      .select("id, hora_inicio, hora_fin, id_profesional, esta_disponible")
      .eq("id", id_franja)
      .single();

    if (frError || !franja) {
      return NextResponse.json({ error: "Franja no encontrada" }, { status: 404 });
    }

    if (!franja.esta_disponible) {
      return NextResponse.json(
        { error: "La franja ya no está disponible" },
        { status: 409 }
      );
    }

    // 3. Construir URLs seguras para Stripe
    const baseUrl = getBaseUrl(req.url);
    const successUrl = `${baseUrl}/cliente?success=true&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/cliente?canceled=true`;

    // 4. Crear sesión Stripe (con metadata para el webhook)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: Math.round(servicio.precio * 100),
            product_data: { name: servicio.nombre },
          },
          quantity: 1,
        },
      ],

      success_url: successUrl,
      cancel_url: cancelUrl,

      metadata: {
        id_cliente,
        id_profesional: franja.id_profesional,
        id_servicio,
        id_franja_disponibilidad: id_franja,
      },
    });

    return NextResponse.json({ url: session.url });

  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("❌ Error creando sesión Stripe:", err.message);
    }
    return NextResponse.json(
      { error: "No se pudo crear la sesión de pago" },
      { status: 500 }
    );
  }
}

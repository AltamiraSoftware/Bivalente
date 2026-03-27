import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resendClient";

const FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

function templates(type, payload) {
  switch (type) {
    case "lead_contacto":
      return {
        subject: `Nueva solicitud web: ${payload.servicio} - ${payload.nombre}`,
        html: `
          <h2>Nueva solicitud desde la web</h2>
          <ul>
            <li><strong>Servicio:</strong> ${payload.servicio}</li>
            <li><strong>Profesional:</strong> ${payload.profesional}</li>
            <li><strong>Nombre:</strong> ${payload.nombre}</li>
            <li><strong>Email:</strong> ${payload.email}</li>
            <li><strong>Telefono:</strong> ${payload.telefono || "No facilitado"}</li>
          </ul>
          <p><strong>Mensaje:</strong></p>
          <p>${payload.mensaje}</p>
        `,
      };

    case "cliente_nueva_reserva":
      return {
        subject: "Confirmacion de tu cita",
        html: `
          <h2>Tu cita ha sido reservada</h2>
          <p>Hola ${payload.nombreCliente},</p>
          <p>Hemos confirmado tu reserva.</p>
          <ul>
            <li><strong>Fecha:</strong> ${payload.fecha}</li>
            <li><strong>Hora:</strong> ${payload.hora}</li>
            <li><strong>Servicio:</strong> ${payload.servicio}</li>
          </ul>
        `,
      };

    case "profesional_nueva_reserva":
      return {
        subject: `Nueva cita reservada: ${payload.nombreCliente}`,
        html: `
          <h2>Nueva cita reservada</h2>
          <p>${payload.nombreProfesional},</p>
          <p>Un paciente ha reservado una nueva cita.</p>
          <ul>
            <li><strong>Cliente:</strong> ${payload.nombreCliente}</li>
            <li><strong>Fecha:</strong> ${payload.fecha}</li>
            <li><strong>Hora:</strong> ${payload.hora}</li>
            <li><strong>Servicio:</strong> ${payload.servicio}</li>
          </ul>
        `,
      };

    case "cliente_recordatorio_24h":
      return {
        subject: "Recordatorio de cita (24 horas antes)",
        html: `
          <h2>Recordatorio de cita</h2>
          <p>Hola ${payload.nombreCliente},</p>
          <p>Te recordamos que tienes una cita manana.</p>
          <ul>
            <li><strong>Fecha:</strong> ${payload.fecha}</li>
            <li><strong>Hora:</strong> ${payload.hora}</li>
            <li><strong>Servicio:</strong> ${payload.servicio}</li>
          </ul>
        `,
      };

    default:
      throw new Error("Tipo de email no valido");
  }
}

export async function POST(req) {
  try {
    const resend = getResendClient();
    const { to, type, payload } = await req.json();

    const t = templates(type, payload);

    const data = await resend.emails.send({
      from: FROM,
      to,
      subject: t.subject,
      html: t.html,
    });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("Email send error:", err.message);
    }
    return NextResponse.json(
      { success: false, error: "No se pudo enviar el email" },
      { status: 500 }
    );
  }
}

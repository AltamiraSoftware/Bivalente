import { NextResponse } from "next/server";
import { getResendClient } from "@/lib/resendClient";
import { BRAND_NAME, WHATSAPP_URL } from "@/lib/contact";

const FROM = process.env.EMAIL_FROM || "onboarding@resend.dev";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function leadConfirmationTemplate(payload) {
  const patientName = escapeHtml(payload.nombre?.trim() || "paciente");

  return {
    subject: "[Bivalente Salud] Hemos recibido tu mensaje. Estás un paso más cerca.",
    html: `
      <div style="font-family: Arial, sans-serif; color: #245953; line-height: 1.65; max-width: 640px; margin: 0 auto;">
        <h1 style="color: #0A4D68; font-size: 24px; margin-bottom: 18px;">Hemos recibido tu mensaje</h1>
        <p>Hola, ${patientName}:</p>
        <p>Gracias por confiar en ${BRAND_NAME}. Hemos recibido tu solicitud y ya está en manos de nuestro equipo médico.</p>
        <p>Sabemos que tu bienestar no puede esperar, por eso te llamaremos personalmente en las próximas 24 horas laborables para resolver tus dudas o agendar tu cita. Nuestro objetivo es que te sientas cómodo/a y escuchado/a desde el primer minuto.</p>
        <p><strong>¿Tienes una urgencia o prefieres no esperar?</strong></p>
        <p>Si necesitas hablar con nosotros ahora mismo, puedes pulsar el siguiente botón para escribirnos por WhatsApp directo:</p>
        <p style="margin: 28px 0;">
          <a href="${WHATSAPP_URL}" style="display: inline-block; background: #0A4D68; color: #ffffff; text-decoration: none; font-weight: 700; padding: 14px 22px; border-radius: 999px;">
            Escribir por WhatsApp ahora
          </a>
        </p>
        <p>Mientras tanto, te invitamos a conocernos un poco más en nuestra web o a seguir nuestros consejos de salud en nuestras redes sociales.</p>
        <p style="margin-top: 28px;">Un abrazo,<br />El equipo de ${BRAND_NAME}.<br /><strong>Tu salud, nuestra prioridad.</strong></p>
      </div>
    `,
  };
}

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

    let confirmationData = null;

    if (type === "lead_contacto" && payload?.email) {
      const confirmation = leadConfirmationTemplate(payload);

      confirmationData = await resend.emails.send({
        from: FROM,
        to: payload.email,
        subject: confirmation.subject,
        html: confirmation.html,
      });
    }

    return NextResponse.json({ success: true, data, confirmationData });
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

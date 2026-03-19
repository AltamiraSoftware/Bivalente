"use client";

import { Mail, MessageSquareText, Phone, UserRound } from "lucide-react";
import { useState } from "react";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

function FieldShell({ icon: Icon, label, helper, children, fullWidth = false }) {
  return (
    <label
      className={[
        "block rounded-2xl border border-white/12 bg-white/6 p-4 sm:p-5",
        fullWidth ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#A4BE7B]">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white!">{label}</p>
          <p className="text-xs text-white/58">{helper}</p>
        </div>
      </div>
      {children}
    </label>
  );
}

export default function ServiceContactForm({
  service,
  professionalName,
  recipientEmail,
}) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: recipientEmail,
          type: "lead_contacto",
          payload: {
            servicio: service,
            profesional: professionalName,
            ...form,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "No se pudo enviar el formulario.");
      }

      setStatus("success");
      setFeedback("Hemos recibido tu solicitud. Te contactaremos lo antes posible.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Ha ocurrido un error al enviar el formulario.");
    }
  }

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  const inputClassName =
    "w-full rounded-xl !border-white/10 !bg-white px-4 py-3.5 !text-[#0A4D68] shadow-none placeholder:!text-slate-400 focus:!border-[#A4BE7B]";

  return (
    <div className="bv-glass rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#A4BE7B]">
          Contacto directo
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white!">
          Solicita informacion sobre {service.toLowerCase()}
        </h3>
        <p className="mt-3 text-white/74 leading-relaxed">
          Completa este formulario y enviaremos tu solicitud directamente a {professionalName} en {recipientEmail}.
        </p>
      </div>

      <div className="bv-divider my-8" />

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <FieldShell
          icon={UserRound}
          label="Nombre"
          helper="Como prefieres que nos dirijamos a ti"
        >
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={(event) => updateField("nombre", event.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            required
            className={inputClassName}
          />
        </FieldShell>

        <FieldShell
          icon={Mail}
          label="Email"
          helper="Donde recibiras la respuesta"
        >
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="tu@email.com"
            autoComplete="email"
            required
            className={inputClassName}
          />
        </FieldShell>

        <FieldShell
          icon={Phone}
          label="Telefono"
          helper="Opcional, por si prefieres contacto rapido"
        >
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={(event) => updateField("telefono", event.target.value)}
            placeholder="Tu telefono"
            autoComplete="tel"
            className={inputClassName}
          />
        </FieldShell>

        <FieldShell
          icon={MessageSquareText}
          label="Mensaje"
          helper="Describe brevemente tu motivo de consulta"
          fullWidth
        >
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={(event) => updateField("mensaje", event.target.value)}
            placeholder={`Cuentanos que necesitas para ${service.toLowerCase()}`}
            rows={6}
            required
            className={`${inputClassName} min-h-[170px] resize-y`}
          />
        </FieldShell>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            className="bv-btn bv-btn-primary bv-btn-lg"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>

          <a href="#contacto" className="bv-btn bv-btn-ghost bv-btn-lg">
            Ver contacto directo
          </a>
        </div>

        {feedback ? (
          <p
            className={[
              "sm:col-span-2 rounded-2xl px-4 py-3 text-sm font-medium",
              status === "success"
                ? "border border-[#A4BE7B]/30 bg-[#A4BE7B]/12 text-white"
                : "border border-red-300/40 bg-red-500/12 text-white",
            ].join(" ")}
          >
            {feedback}
          </p>
        ) : null}

        <p className="sm:col-span-2 text-xs text-white/58">
          Tu mensaje se enviara directamente a {recipientEmail}.
        </p>
      </form>
    </div>
  );
}

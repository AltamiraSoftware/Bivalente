"use client";

import { Mail, MessageSquareText, Phone, UserRound } from "lucide-react";
import { useState } from "react";

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

function FieldShell({
  icon: Icon,
  label,
  helper,
  children,
  fullWidth = false,
  theme = "dark",
}) {
  const isLight = theme === "light";
  const isBrand = theme === "brand";

  return (
    <label
      className={[
        "block rounded-2xl p-4 sm:p-5",
        isLight
          ? "border border-[#dce8e2] bg-[linear-gradient(180deg,#fbfdfc_0%,#f3f8f6_100%)] shadow-[0_10px_24px_rgba(10,77,104,0.05)]"
          : isBrand
            ? "border border-white/14 bg-white/10 backdrop-blur-sm"
          : "border border-white/12 bg-white/6",
        fullWidth ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={[
            "flex h-9 w-9 items-center justify-center rounded-xl",
            isLight
              ? "bg-[linear-gradient(135deg,#0A4D68_0%,#088395_100%)] text-white shadow-[0_10px_22px_rgba(10,77,104,0.14)]"
              : isBrand
                ? "bg-white/14 text-[#dce9c8]"
              : "bg-white/10 text-[#A4BE7B]",
          ].join(" ")}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className={["text-sm font-semibold", isLight ? "text-[#0A4D68]!" : "text-white!"].join(" ")}>
            {label}
          </p>
          <p className={["text-xs", isLight ? "text-[#61764B]" : "text-white/58"].join(" ")}>
            {helper}
          </p>
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
  heading,
  description,
  showContactShortcut = true,
  contactHref = "#contacto",
  theme = "dark",
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
          to: recipients,
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
  const recipients = Array.isArray(recipientEmail) ? recipientEmail : [recipientEmail];
  const recipientLabel =
    recipients.length > 1 ? recipients.join(" y ") : recipients[0];
  const isLight = theme === "light";
  const isBrand = theme === "brand";

  return (
    <div
      className={[
        "rounded-3xl p-6 sm:p-8 shadow-2xl",
        isLight
          ? "border border-[#dce8e2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,249,246,0.94)_100%)] text-[#245953] shadow-[0_22px_52px_rgba(10,77,104,0.10)]"
          : isBrand
            ? "border border-[#d8e7df] bg-[linear-gradient(160deg,#A4BE7B_0%,#88ab63_22%,#4d8b73_62%,#0A4D68_100%)] text-white shadow-[0_26px_56px_rgba(10,77,104,0.20)]"
          : "bv-glass text-white",
      ].join(" ")}
    >
      <div className="max-w-2xl">
        <p
          className={[
            "text-sm font-semibold uppercase tracking-[0.16em]",
            isLight ? "text-[#61764B]" : "text-[#dce9c8]",
          ].join(" ")}
        >
          Contacto directo
        </p>
        <h3
          className={[
            "mt-3 text-2xl sm:text-3xl font-bold",
            isLight ? "text-[#0A4D68]!" : "text-white!",
          ].join(" ")}
        >
          {heading || `Solicita información sobre ${service.toLowerCase()}`}
        </h3>
        <p
          className={[
            "mt-3 leading-relaxed",
            isLight ? "text-[#245953]" : "text-white/78",
          ].join(" ")}
        >
          {description || ""}
        </p>
      </div>

      <div
        className={[
          "my-8 h-px",
          isLight
            ? "bg-gradient-to-r from-transparent via-[#0A4D68]/16 to-transparent"
            : isBrand
              ? "bg-gradient-to-r from-transparent via-white/28 to-transparent"
            : "bv-divider",
        ].join(" ")}
      />

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <FieldShell
          icon={UserRound}
          label="Nombre"
          helper="Cómo prefieres que nos dirijamos a ti"
          theme={theme}
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
          helper="Dónde recibirás la respuesta"
          theme={theme}
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
          label="Teléfono"
          helper="Opcional, por si prefieres contacto rápido"
          theme={theme}
        >
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={(event) => updateField("telefono", event.target.value)}
            placeholder="Tu teléfono"
            autoComplete="tel"
            className={inputClassName}
          />
        </FieldShell>

        <FieldShell
          icon={MessageSquareText}
          label="Mensaje"
          helper="Describe brevemente tu motivo de consulta"
          fullWidth
          theme={theme}
        >
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={(event) => updateField("mensaje", event.target.value)}
            placeholder={`Cuéntanos qué necesitas para ${service.toLowerCase()}`}
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

          {showContactShortcut ? (
            <a
              href={contactHref}
              className={`bv-btn bv-btn-lg ${isLight ? "bv-btn-outline" : "bv-btn-ghost"}`}
            >
              Ver contacto directo
            </a>
          ) : null}
        </div>

        {feedback ? (
          <p
            className={[
              "sm:col-span-2 rounded-2xl px-4 py-3 text-sm font-medium",
              status === "success"
                ? isLight
                  ? "border border-[#A4BE7B]/30 bg-[#A4BE7B]/12 text-[#0A4D68]"
                  : isBrand
                    ? "border border-white/16 bg-white/10 text-white"
                  : "border border-[#A4BE7B]/30 bg-[#A4BE7B]/12 text-white"
                : isLight
                  ? "border border-red-300/40 bg-red-500/10 text-[#7f1d1d]"
                  : isBrand
                    ? "border border-red-200/24 bg-red-500/12 text-white"
                  : "border border-red-300/40 bg-red-500/12 text-white",
            ].join(" ")}
          >
            {feedback}
          </p>
        ) : null}

        <p
          className={[
            "sm:col-span-2 text-xs",
            isLight ? "text-[#61764B]" : "text-white/58",
          ].join(" ")}
        >
          Tu mensaje se enviará directamente a {recipientLabel}.
        </p>
      </form>
    </div>
  );
}


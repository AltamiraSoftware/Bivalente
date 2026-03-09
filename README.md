# PsyManage — Gestor de clínica de psicología

Aplicación web full-stack orientada a producción, diseñada con arquitectura modular, seguridad por roles y flujos reales de negocio (pagos, agenda, comunicación).

---

## ▶ Demo en vivo
 En [Vercel] **[https://altamirasoftware.eu](https://altamirasoftware.eu)** ·

---

## Stack técnico

| Área | Tecnologías |
|------|-------------|
| **Frontend** | Next.js 16 (App Router), React 19, Tailwind CSS 4, FullCalendar, date-fns |
| **Backend** | Supabase (PostgreSQL, Auth, Realtime) |
| **Pagos** | Stripe (Checkout, Webhooks) |
| **Comunicación** | Resend (emails), Supabase Realtime (chat), Daily.co (videollamadas) |
| **DevOps** | Vercel (CI/CD, hosting) |


## Decisiones de arquitectura

- Next.js App Router para separación clara cliente/servidor.
- Supabase con RLS para garantizar aislamiento de datos por rol.
- Stripe Checkout + Webhooks para evitar lógica de pago en cliente.


## Competencias demostradas

- **Frontend:** React, Next.js App Router, componentes reutilizables, estado con hooks, diseño responsive (mobile-first)
- **Backend/APIs:** API Routes (Next.js), integración con servicios externos (Stripe, Supabase, Resend, Daily.co)
- **Base de datos:** PostgreSQL (Supabase), diseño relacional, RLS, triggers
- **Autenticación y seguridad:** Supabase Auth, roles (cliente/profesional), protección de rutas, variables de entorno
- **Pagos:** Stripe Checkout, webhooks, flujo pago → confirmación → email
- **Tiempo real:** Supabase Realtime (chat), sincronización de disponibilidad
- **Despliegue:** Vercel, configuración de entorno, dominio propio

---

## Qué hace la aplicación

- **Profesionales:** Calendario de citas, gestión de disponibilidad semanal, servicios, chat con clientes, resumen semanal, emails automáticos.
- **Clientes:** Registro/login, reserva de cita (calendario + franjas), pago con Stripe, panel con próximas citas, chat con el profesional, videollamadas (Daily.co), edición de perfil.

Flujo típico: cliente elige fecha/hora/servicio → pago Stripe → webhook crea cita y envía emails → profesional y cliente pueden chatear y usar videollamada.

---

## Contexto del proyecto

- **Tipo:** Trabajo intermodular / TFG (Grado Superior en Desarrollo de Aplicaciones Web).
- **Desarrollo:** Proyecto individual (diseño, base de datos, frontend, backend e integraciones).
- **Año:** 2025.
Proyecto desarrollado íntegramente por mí como culminación del ciclo DAW, aplicando buenas prácticas y tecnologías actuales del ecosistema web.

---

## Cómo ejecutarlo en local

```bash
git clone <repo-url>
cd gestor-clinica
npm install
```

Crear `.env.local` con: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_BASE_URL` (y opcionalmente `DAILY_API_KEY`, `RESEND_API_KEY`). Configurar la base de datos en Supabase según el esquema del proyecto.

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Estructura del proyecto (resumida)

```
app/
  api/          → citas, cliente, stripe, webhooks, email, video
  auth/         → login, register
  cliente/      → dashboard cliente (reservas, chat, perfil)
  dashboard/   → dashboard profesional (calendario, disponibilidad, chat)
components/    → layout (header, hero, features, CTA, footer), Modals, ClienteDash, chat
hooks/         → useUser, useAuthModal, useChat
lib/           → supabaseClient, supabaseAdmin, stripe, resend, getBaseUrl
```

---

## Seguridad y buenas prácticas

- Autenticación y sesiones con Supabase Auth; rutas protegidas por rol.
- Row Level Security (RLS) en Supabase para aislamiento de datos.
- Claves y secretos en variables de entorno; uso de Service Role solo en servidor.
- Stripe con validación de webhooks; HTTPS en producción (Vercel).

---

## Scripts

| Comando | Uso |
|--------|-----|
| `npm run dev` | Desarrollo (Turbopack) |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | ESLint |

---

## Contacto

Si te interesa el proyecto o quieres más detalle técnico, puedes contactar a través del repositorio o de la [aplicación en producción](https://altamirasoftware.eu).

---

*Proyecto de uso educativo. TFG — Desarrollo de Aplicaciones Web. © 2025.*

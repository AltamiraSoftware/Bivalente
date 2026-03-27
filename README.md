# Gestor Clínico Bivalente

Aplicación web full-stack para la gestión de una clínica de psicología y fisioterapia. El proyecto cubre la parte pública de captación, el área privada de cliente, el panel profesional y varios flujos de negocio reales: reservas, pagos, chat, videollamada, emails automáticos y publicación de contenidos.

Está planteado como proyecto de portfolio profesional, con foco en demostrar criterio técnico, capacidad de producto y experiencia construyendo una aplicación conectada a servicios externos en un contexto cercano a producción.

## Resumen ejecutivo para RRHH IT

Este repositorio muestra un perfil capaz de trabajar en un producto web completo, no solo en pantallas aisladas. El proyecto combina frontend, backend, base de datos, autenticación, integraciones externas, seguridad básica y despliegue.

Competencias que demuestra:

- Desarrollo full-stack con `Next.js`, `React` y `App Router`.
- Integración con servicios reales de negocio: `Supabase`, `Stripe`, `Resend` y `Daily`.
- Diseño de flujos funcionales de usuario: reserva, pago, confirmación, seguimiento y comunicación.
- Separación de roles y protección de acceso para cliente y profesional.
- Trabajo con SEO, estructura de contenido y páginas públicas orientadas a conversión.
- Organización modular del código y mantenimiento de utilidades compartidas.

## Problema que resuelve

Muchas clínicas pequeñas operan con herramientas separadas para agenda, cobros, mensajería, formularios y contenido web. Este proyecto centraliza esas necesidades en una sola aplicación:

- Web corporativa con servicios y páginas orientadas a captación.
- Reserva de citas por parte del cliente.
- Pago online mediante Stripe.
- Confirmación automática de la cita tras webhook.
- Panel de trabajo para el profesional.
- Chat y videollamada para seguimiento remoto.
- Blog gestionable desde dashboard.

## Funcionalidades principales

### Área pública

- Home comercial y páginas de servicios de psicología y fisioterapia.
- Páginas legales, `sitemap` y `robots`.
- Estructura SEO con metadata y schema markup.
- Blog público con listado y detalle por `slug`.

### Área cliente

- Registro e inicio de sesión.
- Selección de fecha y franja disponible.
- Selección de servicio y redirección a pago.
- Visualización de próximas citas.
- Actualización de datos de cuenta.
- Chat con el profesional.
- Acceso a videollamada.

### Área profesional

- Dashboard privado protegido por rol.
- Calendario de citas con vista operativa.
- Gestión de disponibilidad.
- Creación manual de citas.
- Gestión de servicios.
- Resumen semanal.
- Gestión de artículos del blog.

### Automatizaciones e integraciones

- Stripe Checkout para cobro de sesiones.
- Webhook de Stripe para confirmar el pago y crear la cita.
- Resend para emails transaccionales.
- Daily.co para generar salas de videollamada.
- Supabase para autenticación, acceso a datos y tiempo real.

## Stack técnico

| Capa | Tecnologías |
| --- | --- |
| Frontend | `Next.js 16`, `React 19`, `Tailwind CSS 4`, `FullCalendar`, `date-fns` |
| Backend | Route Handlers de `Next.js`, utilidades server-side, lógica de negocio en App Router |
| Base de datos y auth | `Supabase` (`PostgreSQL`, Auth, consultas por rol, cliente admin para servidor) |
| Pagos | `Stripe` |
| Comunicación | `Resend`, `Supabase Realtime`, `Daily.co` |
| Analítica y despliegue | `Vercel Analytics`, `Vercel` |

## Arquitectura y decisiones destacables

### 1. Aplicación unificada con App Router

Se utiliza `Next.js` con `App Router`, lo que permite convivir páginas públicas, dashboards privados y endpoints internos bajo una misma base de código.

### 2. Separación funcional por dominios

La estructura separa claramente:

- `app/` para rutas, vistas y endpoints.
- `components/` para UI reutilizable.
- `hooks/` para estado y comportamiento de cliente.
- `lib/` para clientes externos, helpers y utilidades de acceso.

### 3. Control de acceso por rol

El proyecto diferencia al menos dos perfiles:

- `cliente`
- `profesional`

La autorización se apoya en autenticación con Supabase y validación adicional de perfil en base de datos para restringir acceso a dashboards y acciones críticas.

### 4. Flujo de pago seguro orientado a servidor

El pago no se resuelve en frontend. El cliente solicita una sesión de Stripe y la confirmación definitiva se realiza mediante webhook firmado. Esto evita confiar en estados manipulables desde cliente y reproduce un flujo real de producción.

### 5. Integraciones encapsuladas

Clientes como Supabase, Stripe o Resend están centralizados en `lib/`, lo que facilita mantenimiento, reutilización y control del uso de secretos.

### 6. Cuidado por SEO y visibilidad

Además del producto transaccional, el proyecto incluye blog, metadata, schema y utilidades SEO, algo valioso para una web de negocio real.

## Flujo funcional principal

1. El cliente accede al área privada y consulta fechas disponibles.
2. Selecciona franja y servicio.
3. El sistema crea una sesión de pago en Stripe.
4. Stripe redirige al pago.
5. El webhook valida la firma del evento.
6. Si el pago se confirma, se crea la cita, se bloquea la franja y se registra el pago.
7. Se envían emails de confirmación.
8. Cliente y profesional pueden gestionar seguimiento desde la plataforma.

## Estructura del proyecto

```text
app/
  api/
    admin/
    citas/
    cliente/
    email/
    stripe/
    video/
    webhooks/
  auth/
  blog/
  cliente/
  dashboard/
  fisioterapia/
  psicologia/
  legal/

components/
  blog/
  chat/
  ClienteDash/
  forms/
  layout/
  Modal/

hooks/
  useAuthModal.js
  useChat.js
  useUser.js

lib/
  blogMutations.js
  blogQueries.js
  getBaseUrl.js
  requireProfessional.js
  resendClient.js
  seo.js
  siteUrl.js
  stripe.js
  supabaseAdmin.js
  supabaseClient.js
  supabaseServer.js
```

## Puntos técnicos de interés para selección IT

### Frontend

- Uso de componentes reutilizables y separación por contexto funcional.
- Interfaz responsive con Tailwind.
- Calendario interactivo para gestión de reservas y agenda.
- Modales y flujos multi-paso para mejorar UX.

### Backend

- Endpoints internos con validación de datos de entrada.
- Uso de rutas server para integrar proveedores externos.
- Lógica de negocio en servidor para acciones sensibles.

### Datos y autenticación

- Supabase Auth para sesiones.
- Consulta de perfil extendido para añadir rol y datos de negocio al usuario autenticado.
- Uso diferenciado de cliente público y cliente admin en servidor.

### Integración de terceros

- Stripe: checkout + webhook.
- Resend: email transaccional.
- Daily: creación dinámica de salas de videollamada.
- Vercel Analytics: medición básica.

### Seguridad aplicada

- Secretos gestionados por variables de entorno.
- Validación de firma de webhook.
- Restricción de acceso por rol.
- Uso de cliente admin únicamente en servidor.
- Cabeceras CSP definidas en configuración.

## Variables de entorno necesarias

El proyecto depende de credenciales y URLs externas. No deben incluirse en el repositorio.

Variables detectadas en el código:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `DAILY_API_KEY`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `NEXT_PUBLIC_WEB_URL`
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `VERCEL_PROJECT_PRODUCTION_URL`
- `VERCEL_URL`

## Ejecución local

```bash
npm install
npm run dev
```

Servidor de desarrollo por defecto:

```bash
http://localhost:3000
```

Scripts disponibles:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Qué valor aporta este proyecto en un proceso de selección

Para RRHH IT y perfiles técnicos, este repositorio es especialmente útil porque enseña un tipo de trabajo muy cercano al que se encuentra en empresa:

- No es una landing aislada, sino un producto con varios roles.
- No depende solo de maquetación; incorpora lógica de negocio.
- Hay integración con pagos y comunicaciones reales.
- Se aprecia criterio de estructuración del código.
- Refleja capacidad para conectar necesidades de negocio con implementación técnica.

## Qué conviene publicar en GitHub

Si el objetivo es usar este proyecto como portfolio profesional, sí conviene publicar:

- Código fuente de `app/`, `components/`, `hooks/`, `lib/`.
- `package.json`, `package-lock.json` y configuración del proyecto.
- `README.md` bien documentado.
- Capturas de pantalla limpias del producto.
- Un archivo `.env.example` con nombres de variables, pero sin valores reales.
- Si existe, un esquema SQL anonimizado o documentación de tablas y relaciones.

## Qué no deberías publicar

No deberías subir nunca:

- `.env.local` ni ningún archivo `.env*` con credenciales reales.
- Claves de Stripe, Supabase service role, Resend o Daily.
- Datos personales reales de pacientes, clientes o profesionales.
- IDs, tokens, secretos de webhook o credenciales de producción.
- Exportaciones temporales, artefactos locales o carpetas generadas como `.next/`.
- `node_modules/`.
- Copias HTML descargadas, recursos de scraping o archivos de prueba innecesarios en `public/`.

## Directrices de publicación segura en GitHub

### 1. Revisa secretos antes de hacer público el repositorio

Haz una revisión manual y automática para comprobar que no haya:

- credenciales en archivos fuente
- tokens en comentarios
- URLs privadas
- emails personales si no quieres exponerlos
- teléfonos reales embebidos en el código

### 2. Sustituye datos sensibles por placeholders

Si quieres mostrar estructura sin exponer información real:

- cambia emails por `contacto@example.com`
- cambia teléfonos por un número ficticio o corporativo
- sustituye dominios privados si no quieres vincular el portfolio al entorno real

### 3. Publica configuración, no secretos

Buena práctica:

- subir `.env.example`
- documentar cada variable
- explicar para qué sirve

Mala práctica:

- subir `.env.local`
- pegar claves en el README
- dejar secretos hardcodeados en utilidades o páginas

### 4. Limpia archivos no necesarios del repositorio

Antes de publicar, conviene revisar especialmente:

- `.next/`
- `node_modules/`
- archivos HTML descargados dentro de `public/`
- recursos temporales de pruebas
- imágenes o documentos con copyright o datos no tuyos

### 5. Evita exponer contenido legal o clínico sensible

Si el proyecto hace referencia a una clínica real:

- revisa textos legales
- revisa PDFs publicados
- verifica que tienes derecho a compartir logos, marca e imágenes

### 6. Documenta las limitaciones del repositorio público

Es buena idea dejar claro en GitHub algo como:

> Este repositorio se publica con fines de portfolio. Las credenciales, datos sensibles y configuración de producción han sido excluidos por seguridad.

## Recomendación práctica para este proyecto

Antes de publicarlo en GitHub, yo haría estos pasos:

1. Mantener `README.md` como presentación principal del portfolio.
2. Crear `.env.example`.
3. Revisar si hay emails, teléfonos o dominios reales hardcodeados en el código.
4. Eliminar de `public/` archivos descargados o artefactos que no aporten valor al portfolio.
5. Confirmar que el repositorio no contiene datos reales ni credenciales históricas.
6. Añadir 3 o 4 capturas buenas del producto: home, dashboard profesional, dashboard cliente y flujo de reserva.

## Estado del proyecto

Proyecto funcional orientado a demostración técnica y portfolio. Puede evolucionar con mejoras como:

- tests automáticos
- documentación de base de datos
- panel admin más completo
- trazabilidad de errores
- sistema de permisos más granular

## Autoría

Proyecto desarrollado como trabajo de portfolio y demostración de capacidades full-stack en entorno web moderno.

Si este repositorio se utiliza en procesos de selección, la recomendación es presentarlo como ejemplo de:

- desarrollo full-stack
- integración de APIs de terceros
- diseño de producto digital
- arquitectura modular
- implementación de flujos de negocio reales

# Bivalente Salud - Gestor Clinica

Aplicacion web de Bivalente Salud, construida con Next.js. El proyecto combina una web publica orientada a SEO para servicios de psicologia y fisioterapia en Madrid con funcionalidades privadas de gestion de citas, blog, cliente, dashboard, pagos y videollamadas.

## Stack

- Next.js 16 con App Router
- React 19
- Tailwind CSS 4
- Supabase para autenticacion, datos y blog
- Stripe para pagos
- Daily para videollamadas
- Resend para email
- Vercel Analytics
- Google Tag Manager con Consent Mode

## Requisitos

- Node.js compatible con Next.js 16
- npm
- Proyecto Supabase configurado
- Claves de Stripe, Daily y Resend si se usan las funcionalidades privadas

## Instalacion

```bash
npm install
```

Crea un archivo `.env.local` a partir de `.env.example` y completa las variables necesarias:

```bash
cp .env.example .env.local
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

DAILY_API_KEY=
RESEND_API_KEY=
EMAIL_FROM=

NEXT_PUBLIC_WEB_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Notas:

- No subas `.env.local` al repositorio.
- Para SEO, `NEXT_PUBLIC_SITE_URL` debe apuntar al dominio canonico en produccion.
- Las claves de Supabase, Stripe, Daily y Resend solo deben compartirse por canales seguros.

## Scripts

```bash
npm run dev
```

Arranca el servidor de desarrollo.

```bash
npm run build
```

Genera la build de produccion.

```bash
npm run start
```

Arranca la build de produccion.

```bash
npm run lint
```

Ejecuta ESLint.

## Estructura del proyecto

```text
app/
  page.jsx                         Home publica
  layout.jsx                       Layout global, metadatos, schema y consent
  robots.js                        Robots.txt dinamico
  sitemap.js                       Sitemap dinamico
  psicologia/                      Landing y tratamientos de psicologia
  fisioterapia/                    Landing y tratamientos de fisioterapia
  blog/                            Blog publico y detalle de articulos
  sobre-nosotros/                  Pagina corporativa
  legal/                           Politica de privacidad y cookies
  auth/                            Login y registro
  cliente/                         Area privada de cliente
  dashboard/                       Area privada profesional/admin
  api/                             Endpoints de citas, email, pagos, video y webhooks

components/
  layout/                          Header, footer, hero, CTAs y bloques publicos
  blog/                            Componentes del blog publico y dashboard
  ClienteDash/                     Componentes del area de cliente
  chat/                            Componentes de chat
  forms/                           Formularios publicos
  Modal/                           Modales compartidos

hooks/
  useAuthModal.jsx                 Estado global del modal de autenticacion

lib/
  seo.js                           Helpers de metadatos, canonical y Open Graph
  schema.js                        Datos estructurados Schema.org
  contact.js                       Datos de marca, telefonos y emails
  blogQueries.js                   Lecturas de blog en Supabase
  blogMutations.js                 Escrituras de blog en Supabase
  blogUtils.js                     Utilidades de blog
  supabase*.js                     Clientes Supabase
  stripe.js                        Cliente Stripe
  resendClient.js                  Cliente Resend

public/
  Imagenes, logos, favicons y documentos publicos
```

## Rutas principales

### Web publica

- `/`
- `/psicologia`
- `/psicologia/ansiedad`
- `/psicologia/autoestima`
- `/psicologia/crisis-emocional`
- `/psicologia/depresion`
- `/psicologia/duelo`
- `/psicologia/psicologia-infanto-juvenil`
- `/psicologia/terapia-pareja`
- `/psicologia/trauma`
- `/fisioterapia`
- `/fisioterapia/contracturas`
- `/fisioterapia/dolor-cervical`
- `/fisioterapia/dolor-lumbar`
- `/fisioterapia/esguinces`
- `/fisioterapia/fascitis-plantar`
- `/fisioterapia/fisioterapia-domicilio`
- `/fisioterapia/lesiones-deportivas`
- `/fisioterapia/tendinopatias`
- `/blog`
- `/blog/[slug]`
- `/sobre-nosotros`
- `/legal/politica-cookies`
- `/legal/politica-privacidad`

### Area privada

- `/auth/login`
- `/auth/register`
- `/cliente`
- `/dashboard`
- `/dashboard/blog`
- `/dashboard/blog/nuevo`
- `/dashboard/blog/[id]/editar`
- `/dashboard/chat`
- `/dashboard/disponibilidad`

### APIs

- `/api/admin/update-email`
- `/api/citas/crear`
- `/api/cliente/crear-sesion-pago`
- `/api/email`
- `/api/stripe/get-session`
- `/api/video/create-room`
- `/api/webhooks/stripe`

## SEO

El SEO tecnico se concentra principalmente en:

- `app/layout.jsx`: metadatos globales, idioma, schema global, iconos y robots por defecto.
- `app/page.jsx`: metadatos y schemas de la home.
- `app/sitemap.js`: rutas estaticas, tratamientos y posts publicados.
- `app/robots.js`: reglas de indexacion y enlace al sitemap.
- `lib/seo.js`: helper `buildMetadata`, canonical, Open Graph e imagen por defecto.
- `lib/schema.js`: LocalBusiness, Service, FAQPage y BreadcrumbList.
- `app/psicologia/_data/tratamientos.js`: contenido SEO de tratamientos de psicologia.
- `app/fisioterapia/_data/tratamientos.js`: contenido SEO de tratamientos de fisioterapia.
- `app/blog/[slug]/page.jsx`: metadatos dinamicos de articulos.

Antes de publicar cambios SEO:

1. Revisa title, description y canonical.
2. Comprueba que el sitemap contiene las URLs publicas correctas.
3. Valida los datos estructurados con la herramienta de resultados enriquecidos de Google.
4. Comprueba que las paginas privadas no entran en el sitemap.
5. Revisa que `NEXT_PUBLIC_SITE_URL` apunta al dominio de produccion.

## Analytics, cookies y GTM

El consentimiento de cookies y la carga de Google Tag Manager estan en:

- `components/CookieConsent.jsx`
- `app/layout.jsx`
- `next.config.mjs`

El banner usa Consent Mode y solo carga GTM cuando existe consentimiento opcional. El identificador actual de GTM esta definido en `components/CookieConsent.jsx`.

El archivo `next.config.mjs` incluye Content Security Policy. Si se anaden nuevos proveedores de analitica, conversion o marketing, hay que revisar:

- `script-src`
- `connect-src`
- `frame-src`
- `img-src`

## Blog

El blog se alimenta desde Supabase:

- `app/blog/page.jsx` lista articulos publicados.
- `app/blog/[slug]/page.jsx` genera metadatos dinamicos y renderiza el contenido.
- `components/blog/` contiene tarjetas, busqueda, formularios y contenido.
- `lib/blogQueries.js` y `lib/blogMutations.js` gestionan lecturas y escrituras.

Los posts deben incluir, cuando sea posible:

- `titulo`
- `slug`
- `extracto`
- `contenido`
- `meta_title`
- `meta_description`
- `imagen_destacada_url`
- `estado`
- fechas de publicacion/actualizacion

## Servicios externos

### Supabase

Se usa para autenticacion, datos de citas, blog y area privada. Los clientes estan en:

- `lib/supabaseClient.js`
- `lib/supabaseServer.js`
- `lib/supabaseAdmin.js`

### Stripe

Se usa para sesiones de pago y webhooks:

- `lib/stripe.js`
- `app/api/cliente/crear-sesion-pago/route.js`
- `app/api/stripe/get-session/route.js`
- `app/api/webhooks/stripe/route.js`

### Daily

Se usa para crear salas de videollamada:

- `app/api/video/create-room/route.js`
- `components/VideoCall.jsx`
- `components/VideoPortal.js`

### Resend

Se usa para envio de email:

- `lib/resendClient.js`
- `app/api/email/route.js`

## Convenciones

- Los archivos con JSX usan extension `.jsx`.
- Los route handlers de Next se mantienen como `route.js`.
- `robots.js` y `sitemap.js` se mantienen con la convencion de Next.
- Las utilidades de `lib/` se mantienen como `.js` si no renderizan JSX.
- Las importaciones suelen ir sin extension para que Next resuelva `.js` y `.jsx`.

## Verificacion antes de desplegar

```bash
npm run lint
npm run build
```

La build debe generar correctamente las rutas publicas, privadas y APIs. Si falla por variables de entorno, revisa `.env.local` y las claves del entorno de despliegue.

## Notas de despliegue

El proyecto esta preparado para desplegarse en Vercel. En produccion, configura las variables de entorno en el panel del proveedor y verifica:

- Dominio canonico en `NEXT_PUBLIC_SITE_URL`.
- Webhook de Stripe apuntando a `/api/webhooks/stripe`.
- Claves de Supabase de produccion.
- Clave de Daily si se usan videollamadas.
- Clave de Resend y remitente `EMAIL_FROM`.
- GTM y eventos de conversion.
- Sitemap disponible en `/sitemap.xml`.
- Robots disponible en `/robots.txt`.

## Seguridad

- No compartir `.env.local`.
- No exponer `SUPABASE_SERVICE_ROLE_KEY` en cliente.
- Revisar permisos de dashboard y rutas privadas antes de publicar cambios.
- Mantener Stripe webhooks validados con `STRIPE_WEBHOOK_SECRET`.
- Comprobar Consent Mode antes de activar nuevas etiquetas de marketing.

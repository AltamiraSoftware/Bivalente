/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogProfessionalCard from "@/components/blog/BlogProfessionalCard";
import {
  createSupabasePublicClient,
  createSupabaseServerClient,
} from "@/lib/supabaseServer";
import {
  getAccessibleBlogPostBySlug,
  getPublishedBlogPosts,
} from "@/lib/blogQueries";
import {
  extractPlainText,
  formatBlogDate,
  getBlogCategoryKind,
} from "@/lib/blogUtils";
import { buildMetadata, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const supabase = createSupabasePublicClient();
  const post = await getAccessibleBlogPostBySlug(supabase, slug);

  if (!post || post.estado !== "published") {
    return buildMetadata({
      title: "Artículo no encontrado | Bivalente Salud",
      description: "El artículo solicitado no está disponible.",
      path: `/blog/${slug}`,
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    });
  }

  const baseTitle = post.meta_title || post.titulo;
  const title = baseTitle.includes("Bivalente Salud")
    ? baseTitle
    : `${baseTitle} | Bivalente Salud`;
  const rawDescription =
    post.meta_description ||
    post.extracto ||
    extractPlainText(post.contenido).slice(0, 160);
  const description =
    rawDescription.length > 160
      ? `${rawDescription.slice(0, 157).trim()}...`
      : rawDescription;
  const image = post.imagen_destacada_url || DEFAULT_OG_IMAGE;

  return buildMetadata({
    title,
    description,
    path: `/blog/${post.slug}`,
    type: "article",
    images: [image],
  });
}

export async function generateStaticParams() {
  const supabase = createSupabasePublicClient();
  const posts = await getPublishedBlogPosts(supabase);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const post = await getAccessibleBlogPostBySlug(supabase, slug, user?.id);

  if (!post) {
    notFound();
  }

  const isDraftPreview = post.estado !== "published";
  const categoryKind = getBlogCategoryKind(post.categoria);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pt-28 pb-14 sm:pt-32">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#A4BE7B]/25 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl px-6">
          {isDraftPreview ? (
            <span className="inline-flex rounded-full border border-[#f3dd9b]/35 bg-[#f7e8b4]/20 px-4 py-2 text-sm font-semibold text-[#fff1c2]">
              Vista previa de borrador
            </span>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
            {post.categoria?.nombre ? (
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-semibold text-white">
                {post.categoria.nombre}
              </span>
            ) : null}
            <span>{formatBlogDate(post.publicado_en || post.creado_en)}</span>
            {post.autor?.nombre_completo ? (
              <span>Por {post.autor.nombre_completo}</span>
            ) : null}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white! md:text-5xl">
            {post.titulo}
          </h1>
          {post.extracto ? (
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
              {post.extracto}
            </p>
          ) : null}
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-5xl px-6">
          <article className="-mt-6 overflow-hidden rounded-[28px] border border-[#dce8e2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(249,251,250,0.96)_100%)] shadow-[0_20px_54px_rgba(10,77,104,0.10)]">
            {post.imagen_destacada_url ? (
              <figure className="border-b border-[#dce8e2] bg-[linear-gradient(180deg,#eef4f1_0%,#f7faf8_100%)]">
                <div className="mx-auto max-w-[980px] px-4 py-4 sm:px-6 sm:py-6">
                  <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#edf4f0] sm:min-h-[360px]">
                    <img
                      src={post.imagen_destacada_url}
                      alt={post.titulo}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </figure>
            ) : null}

            <div className="px-6 py-8 md:px-12 md:py-10">
              <div className="mx-auto max-w-3xl space-y-10">
                <BlogPostContent content={post.contenido} />
                <BlogProfessionalCard categoryKind={categoryKind} />
                <BlogCTA />
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

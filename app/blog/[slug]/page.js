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

  const title = post.meta_title || post.titulo;
  const description =
    post.meta_description ||
    post.extracto ||
    extractPlainText(post.contenido).slice(0, 160);
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
        <div className="container mx-auto max-w-4xl px-6">
          <article className="-mt-8 overflow-hidden rounded-[32px] border border-white/70 bg-white/92 shadow-[0_24px_60px_rgba(10,77,104,0.12)]">
            {post.imagen_destacada_url ? (
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#dbeae5]">
                <img
                  src={post.imagen_destacada_url}
                  alt={post.titulo}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}

            <div className="space-y-8 p-6 md:p-10">
              <BlogPostContent content={post.contenido} />
              <BlogProfessionalCard categoryKind={categoryKind} />
              <BlogCTA />
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

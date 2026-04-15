import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import { filterCoreBlogCategories } from "@/lib/blogUtils";
import { createSupabasePublicClient } from "@/lib/supabaseServer";
import { getBlogCategories, getPublishedBlogPosts } from "@/lib/blogQueries";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Blog de Psicolog\u00EDa y Fisioterapia en Madrid | Bivalente Salud",
  description:
    "Art\u00EDculos de psicolog\u00EDa y fisioterapia en Madrid para resolver dudas, entender s\u00EDntomas y mejorar tu salud con criterio profesional.",
  path: "/blog",
});

export default async function BlogPage() {
  const supabase = createSupabasePublicClient();
  const [posts, rawCategories] = await Promise.all([
    getPublishedBlogPosts(supabase),
    getBlogCategories(supabase),
  ]);
  const categories = filterCoreBlogCategories(rawCategories);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeaderClient />
      <BlogHero categories={categories} />
      <BlogSearch posts={posts} categories={categories} />
      <Footer />
    </main>
  );
}

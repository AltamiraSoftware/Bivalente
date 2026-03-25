import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogSearch from "@/components/blog/BlogSearch";
import { filterCoreBlogCategories } from "@/lib/blogUtils";
import { createSupabasePublicClient } from "@/lib/supabaseServer";
import { getBlogCategories, getPublishedBlogPosts } from "@/lib/blogQueries";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Blog de Psicología y Fisioterapia en Madrid | Bivalente Salud",
  description:
    "Artículos de psicología y fisioterapia en Madrid para resolver dudas, entender síntomas y mejorar tu salud.",
  path: "/blog",
});

export default async function BlogPage() {
  const supabase = createSupabasePublicClient();
  const [posts, rawCategories] = await Promise.all([
    getPublishedBlogPosts(supabase),
    getBlogCategories(supabase),
  ]);
  const categories = filterCoreBlogCategories(rawCategories);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />
      <BlogHero categories={categories} />
      <BlogCategories categories={categories} />
      <BlogSearch posts={posts} categories={categories} />
      <Footer />
    </main>
  );
}

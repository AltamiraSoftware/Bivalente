import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogCategories from "@/components/blog/BlogCategories";
import BlogSearch from "@/components/blog/BlogSearch";
import { filterCoreBlogCategories } from "@/lib/blogUtils";
import { createSupabasePublicClient } from "@/lib/supabaseServer";
import { getBlogCategories, getPublishedBlogPosts } from "@/lib/blogQueries";

export const metadata = {
  title: "Blog",
  description:
    "Artículos de psicología y fisioterapia de Clínica Bivalente. Contenido útil, sanitario y optimizado para orientar a pacientes con un lenguaje claro.",
};

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

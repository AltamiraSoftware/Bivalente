import { createSupabasePublicClient } from "@/lib/supabaseServer";
import { getPublishedBlogPosts } from "@/lib/blogQueries";
import { absoluteUrl } from "@/lib/seo";
import { tratamientosSeo as psicologiaTratamientos } from "@/app/psicologia/_data/tratamientos";
import { tratamientosSeo as fisioterapiaTratamientos } from "@/app/fisioterapia/_data/tratamientos";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const supabase = createSupabasePublicClient();
  const posts = await getPublishedBlogPosts(supabase);
  const now = new Date();

  const staticRoutes = ["/", "/psicologia", "/fisioterapia", "/blog"];
  const treatmentRoutes = [
    ...Object.values(psicologiaTratamientos).map((item) => item.path),
    ...Object.values(fisioterapiaTratamientos).map((item) => item.path),
  ];
  const blogRoutes = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.actualizado_en || post.publicado_en || post.creado_en || now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.8,
    })),
    ...treatmentRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...blogRoutes,
  ];
}

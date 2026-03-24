import { notFound } from "next/navigation";
import Header from "@/components/header";
import BlogForm from "@/components/blog/BlogForm";
import { requireProfessional } from "@/lib/requireProfessional";
import { getBlogCategories, getProfessionalBlogPostById } from "@/lib/blogQueries";
import { filterCoreBlogCategories } from "@/lib/blogUtils";

export default async function DashboardBlogEditPage({ params }) {
  const { id } = await params;
  const { supabase, user } = await requireProfessional();
  const [categories, post] = await Promise.all([
    getBlogCategories(supabase),
    getProfessionalBlogPostById(supabase, id, user.id),
  ]);
  const allowedCategories = filterCoreBlogCategories(categories);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(180deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <BlogForm userId={user.id} categories={allowedCategories} post={post} />
      </div>
    </main>
  );
}

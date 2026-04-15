import Header from "@/components/header";
import BlogForm from "@/components/blog/BlogForm";
import { requireProfessional } from "@/lib/requireProfessional";
import { getBlogCategories } from "@/lib/blogQueries";
import { filterCoreBlogCategories } from "@/lib/blogUtils";

export default async function DashboardBlogNewPage() {
  const { supabase, user } = await requireProfessional();
  const categories = filterCoreBlogCategories(await getBlogCategories(supabase));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(180deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <BlogForm userId={user.id} categories={categories} />
      </div>
    </main>
  );
}

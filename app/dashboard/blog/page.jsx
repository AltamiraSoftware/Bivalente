import Header from "@/components/header";
import BlogDashboardTable from "@/components/blog/BlogDashboardTable";
import { requireProfessional } from "@/lib/requireProfessional";
import { getProfessionalBlogPosts } from "@/lib/blogQueries";

export default async function DashboardBlogPage() {
  const { supabase, user } = await requireProfessional();
  const posts = await getProfessionalBlogPosts(supabase, user.id);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(164,190,123,0.20),_transparent_24%),radial-gradient(circle_at_85%_18%,_rgba(8,131,149,0.18),_transparent_24%),linear-gradient(180deg,_#edf5f1_0%,_#f7faf9_55%,_#e2eee7_100%)]">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-4 flex flex-wrap gap-3">
          <span className="rounded-full bg-[#e4f1ea] px-4 py-2 text-sm font-semibold text-[#256948]">
            Categoría activa: Psicología
          </span>
          <span className="rounded-full bg-[#e1eff4] px-4 py-2 text-sm font-semibold text-[#0A4D68]">
            Categoría activa: Fisioterapia
          </span>
        </div>
        <BlogDashboardTable initialPosts={posts} userId={user.id} />
      </div>
    </main>
  );
}

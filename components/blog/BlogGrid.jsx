import BlogCard from "@/components/blog/BlogCard";

export default function BlogGrid({ posts = [] }) {
  if (!posts.length) {
    return (
      <div className="rounded-[28px] border border-[#d7e7e1] bg-white/92 p-10 text-center shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
        <h2 className="text-2xl font-bold text-[#0A4D68]!">No hay artículos para mostrar</h2>
        <p className="mt-3 text-sm text-[#245953]">
          Ajusta la búsqueda o revisa otra categoría para encontrar contenido relacionado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

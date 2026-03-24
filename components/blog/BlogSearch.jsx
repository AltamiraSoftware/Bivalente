"use client";

import { useMemo, useState } from "react";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogSearch({ posts, categories }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesSearch = !normalizedSearch || post.titulo.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        selectedCategory === "all" || String(post.id_categoria) === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, selectedCategory]);

  return (
    <section className="relative -mt-10 pb-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-8 rounded-[30px] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-sm md:p-8">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_260px]">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0A4D68]">Buscar por título</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ej. ansiedad, suelo pélvico, ejercicio terapéutico..."
                className="w-full"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0A4D68]">Filtrar por categoría</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full"
              >
                <option value="all">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category.id} value={String(category.id)}>
                    {category.nombre}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="mt-4 text-sm text-[#245953]">
            {filteredPosts.length} artículo{filteredPosts.length === 1 ? "" : "s"} encontrado{filteredPosts.length === 1 ? "" : "s"}.
          </p>
        </div>

        <BlogGrid posts={filteredPosts} />
      </div>
    </section>
  );
}

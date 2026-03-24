"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { deleteBlogPost } from "@/lib/blogMutations";
import { formatBlogDate } from "@/lib/blogUtils";

export default function BlogDashboardTable({ initialPosts, userId }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return posts.filter((post) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        post.titulo.toLowerCase().includes(normalizedSearch) ||
        post.slug.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [posts, search]);

  async function handleDelete(postId) {
    const confirmed = window.confirm("Esta acción borrará el artículo de forma permanente.");

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      try {
        await deleteBlogPost(supabase, postId, userId);
        setPosts((current) => current.filter((post) => post.id !== postId));
        setFeedback("Artículo eliminado correctamente.");
        router.refresh();
      } catch (error) {
        setFeedback(error.message || "No se pudo eliminar el artículo.");
      }
    });
  }

  return (
    <section className="space-y-6">
      <div className="rounded-[30px] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#61764B]">
              Dashboard blog
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#0A4D68]!">Tus artículos</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#245953]">
              Gestiona borradores y publicaciones desde el mismo panel profesional. Cada profesional solo ve y modifica sus propios posts.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Buscar por título o slug"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full min-w-0 sm:w-72"
            />
            <Link href="/dashboard/blog/nuevo" className="bv-btn bv-btn-primary-dark bv-btn-lg">
              Nuevo artículo
            </Link>
          </div>
        </div>

        {feedback ? <p className="mt-4 text-sm font-medium text-[#256948]">{feedback}</p> : null}
      </div>

      <div className="overflow-hidden rounded-[30px] border border-[#d7e7e1] bg-white/92 shadow-[0_18px_40px_rgba(10,77,104,0.08)]">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#eef6f3]">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-[#0A4D68]">Artículo</th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-[#0A4D68]">Estado</th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-[#0A4D68]">Categoría</th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-[#0A4D68]">Fecha</th>
                <th className="px-5 py-4 text-right text-sm font-semibold text-[#0A4D68]">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-t border-[#e3efeb]">
                  <td className="px-5 py-5 align-top">
                    <div className="space-y-1">
                      <p className="font-semibold text-[#0A4D68]">{post.titulo}</p>
                      <p className="text-sm text-[#61764B]">/{post.slug}</p>
                    </div>
                  </td>
                  <td className="px-5 py-5 align-top">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        post.estado === "published"
                          ? "bg-[#dff2e6] text-[#256948]"
                          : "bg-[#f2efe4] text-[#7a6325]"
                      }`}
                    >
                      {post.estado === "published" ? "Publicado" : "Borrador"}
                    </span>
                  </td>
                  <td className="px-5 py-5 align-top text-sm text-[#245953]">
                    {post.categoria?.nombre || "Sin categoría"}
                  </td>
                  <td className="px-5 py-5 align-top text-sm text-[#245953]">
                    {formatBlogDate(post.publicado_en || post.actualizado_en || post.creado_en)}
                  </td>
                  <td className="px-5 py-5 align-top">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/dashboard/blog/${post.id}/editar`}
                        className="rounded-xl border border-[#c8ddda] px-4 py-2 text-sm font-semibold text-[#0A4D68] transition hover:bg-[#f4f9f8]"
                      >
                        Editar
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.id)}
                        disabled={isPending}
                        className="rounded-xl border border-[#f0c3bf] px-4 py-2 text-sm font-semibold text-[#9b2c2c] transition hover:bg-[#fceceb] disabled:opacity-60"
                      >
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!filteredPosts.length ? (
          <div className="p-8 text-center text-sm text-[#245953]">
            No hay artículos que coincidan con la búsqueda.
          </div>
        ) : null}
      </div>
    </section>
  );
}

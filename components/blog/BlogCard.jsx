/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BRAND_NAME } from "@/lib/contact";
import { formatBlogDate } from "@/lib/blogUtils";

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/70 bg-white/88 shadow-[0_24px_60px_rgba(10,77,104,0.10)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(10,77,104,0.14)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#dcece6] via-[#edf7f4] to-[#cfe7de]">
        {post.imagen_destacada_url ? (
          <img
            src={post.imagen_destacada_url}
            alt={post.titulo}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center text-sm font-semibold text-[#0A4D68]">
            {BRAND_NAME}
          </div>
        )}
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {post.categoria?.nombre ? (
            <span className="rounded-full bg-[#e4f1ea] px-3 py-1 font-semibold text-[#256948]">
              {post.categoria.nombre}
            </span>
          ) : null}
          <span className="text-[#61764B]">
            {formatBlogDate(post.publicado_en || post.creado_en)}
          </span>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0A4D68]!">{post.titulo}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#245953]">{post.extracto}</p>
        </div>

        <Link href={`/blog/${post.slug}`} className="bv-btn bv-btn-primary-dark bv-btn-lg w-full justify-center">
          Leer más
        </Link>
      </div>
    </article>
  );
}

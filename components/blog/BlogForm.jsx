"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import {
  createBlogPost,
  updateBlogPost,
  uploadBlogImage,
} from "@/lib/blogMutations";
import {
  BLOG_STATUS,
  buildBlogPostPayload,
  filterCoreBlogCategories,
  getBlogFormDefaults,
  slugify,
} from "@/lib/blogUtils";

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export default function BlogForm({ userId, categories, post = null }) {
  const allowedCategories = filterCoreBlogCategories(categories);
  const router = useRouter();
  const [values, setValues] = useState(getBlogFormDefaults(post));
  const [slugEditedManually, setSlugEditedManually] = useState(Boolean(post?.slug));
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleChange(field, value) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(nextStatus) {
    startTransition(async () => {
      setFeedback({ type: "", message: "" });

      try {
        const payload = buildBlogPostPayload(
          { ...values, estado: nextStatus },
          userId,
          post
        );

        if (
          !payload.titulo ||
          !payload.slug ||
          !payload.extracto ||
          !payload.contenido ||
          !payload.id_categoria
        ) {
          setFeedback({
            type: "error",
            message: "Título, slug, extracto, contenido y categoría son obligatorios.",
          });
          return;
        }

        if (post?.id) {
          await updateBlogPost(supabase, post.id, userId, payload);
          setFeedback({ type: "success", message: "Artículo actualizado correctamente." });
        } else {
          await createBlogPost(supabase, payload);
          setFeedback({ type: "success", message: "Artículo creado correctamente." });
        }

        router.push("/dashboard/blog");
        router.refresh();
      } catch (error) {
        setFeedback({
          type: "error",
          message: error.message || "No se pudo guardar el artículo.",
        });
      }
    });
  }

  async function handleImageUpload(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setFeedback({
        type: "error",
        message: "Solo se permiten imágenes JPG, JPEG, PNG o WEBP.",
      });
      event.target.value = "";
      return;
    }

    setIsUploadingImage(true);
    setFeedback({ type: "", message: "" });

    try {
      const publicUrl = await uploadBlogImage(supabase, file);
      handleChange("imagen_destacada_url", publicUrl);
      setFeedback({
        type: "success",
        message: "Imagen subida correctamente.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "No se pudo subir la imagen.",
      });
    } finally {
      setIsUploadingImage(false);
      event.target.value = "";
    }
  }

  return (
    <section className="space-y-6">
      <div className="rounded-[30px] border border-white/70 bg-white/88 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] backdrop-blur-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#61764B]">
          Dashboard blog
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#0A4D68]!">
          {post ? "Editar artículo" : "Nuevo artículo"}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#245953]">
          Completa el contenido y decide si guardarlo como borrador o publicarlo. El SEO básico queda accesible desde el propio formulario.
        </p>
      </div>

      <div className="rounded-[30px] border border-[#d7e7e1] bg-white/92 p-6 shadow-[0_18px_40px_rgba(10,77,104,0.08)] md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Título</span>
            <input
              value={values.titulo}
              onChange={(event) => {
                const nextTitle = event.target.value;
                setValues((current) => ({
                  ...current,
                  titulo: nextTitle,
                  slug: slugEditedManually ? current.slug : slugify(nextTitle),
                }));
              }}
              placeholder="Ej. Cómo identificar una contractura cervical"
              className="w-full"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Slug</span>
            <input
              value={values.slug}
              onChange={(event) => {
                setSlugEditedManually(true);
                handleChange("slug", slugify(event.target.value));
              }}
              placeholder="como-identificar-una-contractura-cervical"
              className="w-full"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Extracto</span>
            <textarea
              value={values.extracto}
              onChange={(event) => handleChange("extracto", event.target.value)}
              rows={3}
              placeholder="Resumen breve para la tarjeta y la metadata."
              className="w-full"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Contenido</span>
            <textarea
              value={values.contenido}
              onChange={(event) => handleChange("contenido", event.target.value)}
              rows={16}
              placeholder={"Puedes escribir en texto plano o con markdown simple.\n\n# Encabezado\n## Subtítulo\n- Punto clave"}
              className="w-full"
            />
          </label>

          <div className="space-y-3">
            <span className="text-sm font-semibold text-[#0A4D68]">Imagen destacada</span>
            <label className="flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-[#bdd5d1] bg-[#f6faf9] px-4 py-4 text-sm font-semibold text-[#0A4D68] transition hover:bg-[#eef6f3]">
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="hidden"
                disabled={isUploadingImage}
              />
              {isUploadingImage ? "Subiendo imagen..." : "Seleccionar imagen"}
            </label>

            <input
              value={values.imagen_destacada_url}
              readOnly
              placeholder="La URL pública aparecerá aquí tras la subida"
              className="w-full bg-[#f7faf9]"
            />

            {values.imagen_destacada_url ? (
              <div className="overflow-hidden rounded-2xl border border-[#d7e7e1] bg-[#eef6f3]">
                <img
                  src={values.imagen_destacada_url}
                  alt="Preview imagen destacada"
                  className="h-48 w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-[#d7e7e1] bg-[#f8fbfa] text-sm text-[#61764B]">
                La preview de la imagen aparecerá aquí.
              </div>
            )}
          </div>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Categoría</span>
            <select
              value={values.id_categoria}
              onChange={(event) => handleChange("id_categoria", event.target.value)}
              className="w-full"
            >
              <option value="">Selecciona una categoría</option>
              {allowedCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nombre}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Meta title</span>
            <input
              value={values.meta_title}
              onChange={(event) => handleChange("meta_title", event.target.value)}
              placeholder="Si lo dejas vacío, se usará el título."
              className="w-full"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Meta description</span>
            <textarea
              value={values.meta_description}
              onChange={(event) => handleChange("meta_description", event.target.value)}
              rows={3}
              placeholder="Si lo dejas vacío, se usará el extracto."
              className="w-full"
            />
          </label>

          <label className="space-y-2 md:col-span-2">
            <span className="text-sm font-semibold text-[#0A4D68]">Estado</span>
            <select
              value={values.estado}
              onChange={(event) => handleChange("estado", event.target.value)}
              className="w-full md:max-w-xs"
            >
              <option value={BLOG_STATUS.DRAFT}>Borrador</option>
              <option value={BLOG_STATUS.PUBLISHED}>Publicado</option>
            </select>
          </label>
        </div>

        {feedback.message ? (
          <p
            className={`mt-5 text-sm font-medium ${
              feedback.type === "error" ? "text-[#9b2c2c]" : "text-[#256948]"
            }`}
          >
            {feedback.message}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleSubmit(BLOG_STATUS.DRAFT)}
            disabled={isPending}
            className="bv-btn bv-btn-outline bv-btn-lg"
          >
            Guardar draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(BLOG_STATUS.PUBLISHED)}
            disabled={isPending}
            className="bv-btn bv-btn-primary-dark bv-btn-lg"
          >
            Publicar
          </button>
          <Link href="/dashboard/blog" className="bv-btn bv-btn-ghost bv-btn-lg bg-[#0A4D68]/88">
            Volver
          </Link>
        </div>
      </div>
    </section>
  );
}

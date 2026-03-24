export const BLOG_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
};

export const CORE_BLOG_CATEGORY_ORDER = ["psicologia", "fisioterapia"];

export function slugify(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function formatBlogDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

export function extractPlainText(markdown = "") {
  return markdown
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__|\*|_|`|>)/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/^- /gm, "")
    .replace(/\n+/g, " ")
    .trim();
}

export function buildBlogPostPayload(values, authorId, existingPost) {
  const titulo = values.titulo.trim();
  const slug = slugify(values.slug || values.titulo);
  const estado = values.estado === BLOG_STATUS.PUBLISHED ? BLOG_STATUS.PUBLISHED : BLOG_STATUS.DRAFT;
  const now = new Date().toISOString();
  const previousPublishedAt = existingPost?.publicado_en || null;

  return {
    titulo,
    slug,
    extracto: values.extracto.trim(),
    contenido: values.contenido.trim(),
    imagen_destacada_url: values.imagen_destacada_url.trim() || null,
    id_categoria: values.id_categoria || null,
    meta_title: values.meta_title.trim() || titulo,
    meta_description: values.meta_description.trim() || values.extracto.trim(),
    estado,
    id_autor: authorId,
    publicado_en:
      estado === BLOG_STATUS.PUBLISHED ? previousPublishedAt || now : null,
  };
}

export function getBlogFormDefaults(post) {
  return {
    titulo: post?.titulo || "",
    slug: post?.slug || "",
    extracto: post?.extracto || "",
    contenido: post?.contenido || "",
    imagen_destacada_url: post?.imagen_destacada_url || "",
    id_categoria: post?.id_categoria || "",
    meta_title: post?.meta_title || "",
    meta_description: post?.meta_description || "",
    estado: post?.estado || BLOG_STATUS.DRAFT,
  };
}

export function normalizeCategoryValue(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function getBlogCategoryKind(category) {
  const normalizedSlug = normalizeCategoryValue(category?.slug || "");
  const normalizedName = normalizeCategoryValue(category?.nombre || "");
  const normalizedValue = normalizedSlug || normalizedName;

  if (normalizedValue.includes("psicologia")) {
    return "psicologia";
  }

  if (normalizedValue.includes("fisioterapia")) {
    return "fisioterapia";
  }

  return null;
}

export function filterCoreBlogCategories(categories = []) {
  return categories
    .filter((category) => getBlogCategoryKind(category))
    .sort((left, right) => {
      const leftIndex = CORE_BLOG_CATEGORY_ORDER.indexOf(getBlogCategoryKind(left));
      const rightIndex = CORE_BLOG_CATEGORY_ORDER.indexOf(getBlogCategoryKind(right));

      return leftIndex - rightIndex;
    });
}

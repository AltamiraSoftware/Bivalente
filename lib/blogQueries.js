const BLOG_POST_SELECT = `
  id,
  titulo,
  slug,
  extracto,
  contenido,
  imagen_destacada_url,
  id_categoria,
  estado,
  meta_title,
  meta_description,
  id_autor,
  publicado_en,
  creado_en,
  actualizado_en,
  categoria:blog_categories (
    id,
    nombre,
    slug
  ),
  autor:perfiles_usuarios!blog_posts_id_autor_fkey (
    id,
    nombre_completo
  )
`;

export async function getBlogCategories(supabase) {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("id, nombre, slug, descripcion")
    .order("nombre");

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getPublishedBlogPosts(supabase) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("estado", "published")
    .order("publicado_en", { ascending: false, nullsFirst: false })
    .order("creado_en", { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getPublishedBlogPostBySlug(supabase, slug) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("slug", slug)
    .eq("estado", "published")
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAccessibleBlogPostBySlug(supabase, slug, authorId) {
  const publishedPost = await getPublishedBlogPostBySlug(supabase, slug);

  if (publishedPost) {
    return publishedPost;
  }

  if (!authorId) {
    return null;
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("slug", slug)
    .eq("id_autor", authorId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getProfessionalBlogPosts(supabase, authorId) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("id_autor", authorId)
    .order("actualizado_en", { ascending: false, nullsFirst: false })
    .order("creado_en", { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getProfessionalBlogPostById(supabase, id, authorId) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_POST_SELECT)
    .eq("id", id)
    .eq("id_autor", authorId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

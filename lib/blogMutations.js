import { slugify } from "@/lib/blogUtils";

export async function createBlogPost(supabase, payload) {
  const { data, error } = await supabase
    .from("blog_posts")
    .insert(payload)
    .select("id, slug")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateBlogPost(supabase, id, authorId, payload) {
  const { data, error } = await supabase
    .from("blog_posts")
    .update(payload)
    .eq("id", id)
    .eq("id_autor", authorId)
    .select("id, slug")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteBlogPost(supabase, id, authorId) {
  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id)
    .eq("id_autor", authorId);

  if (error) {
    throw error;
  }
}

export async function uploadBlogImage(supabase, file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const baseName = file.name.replace(/\.[^.]+$/, "");
  const filePath = `${Date.now()}-${slugify(baseName)}.${extension}`;

  const { error: uploadError } = await supabase.storage
    .from("blog-images")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("blog-images").getPublicUrl(filePath);

  return publicUrl;
}

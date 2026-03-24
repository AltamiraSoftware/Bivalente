import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

export async function requireProfessional() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: profile } = await supabase
    .from("perfiles_usuarios")
    .select("id, nombre_completo, rol")
    .eq("id", user.id)
    .single();

  if (!profile || profile.rol !== "profesional") {
    redirect("/");
  }

  return {
    supabase,
    user: {
      ...user,
      ...profile,
    },
  };
}

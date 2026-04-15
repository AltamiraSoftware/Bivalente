import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata = buildNoIndexMetadata("Acceso | Bivalente Salud");

export default function AuthLayout({ children }) {
  return children;
}

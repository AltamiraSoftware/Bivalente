import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata = buildNoIndexMetadata("Área cliente | Bivalente Salud");

export default function ClienteLayout({ children }) {
  return children;
}

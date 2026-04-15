import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata = buildNoIndexMetadata("Dashboard | Bivalente Salud");

export default function DashboardLayout({ children }) {
  return children;
}

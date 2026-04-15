import TreatmentPage from "../_components/TreatmentPage";
import { buildMetadata } from "@/lib/seo";
import { getTreatment } from "../_data/tratamientos";

const treatment = getTreatment("fisioterapia-domicilio");

export const metadata = buildMetadata({
  title: `${treatment.metaTitle} | Bivalente Salud`,
  description: treatment.metaDescription,
  path: treatment.path,
});

export default function FisioterapiaDomicilioPage() {
  return <TreatmentPage treatment={treatment} />;
}

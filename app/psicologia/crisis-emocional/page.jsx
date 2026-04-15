import TreatmentPage from "../_components/TreatmentPage";
import { buildMetadata } from "@/lib/seo";
import { getTreatment } from "../_data/tratamientos";

const treatment = getTreatment("crisis-emocional");

export const metadata = buildMetadata({
  title: treatment.metaTitle,
  description: treatment.metaDescription,
  path: treatment.path,
});

export default function CrisisEmocionalPage() {
  return <TreatmentPage treatment={treatment} />;
}

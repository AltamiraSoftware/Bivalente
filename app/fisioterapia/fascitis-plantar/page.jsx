import TreatmentPage from "../_components/TreatmentPage";
import { buildMetadata } from "@/lib/seo";
import { getTreatment } from "../_data/tratamientos";

const treatment = getTreatment("fascitis-plantar");

export const metadata = buildMetadata({
  title: treatment.metaTitle,
  description: treatment.metaDescription,
  path: treatment.path,
});

export default function FascitisPlantarPage() {
  return <TreatmentPage treatment={treatment} />;
}

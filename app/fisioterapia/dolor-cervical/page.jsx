import TreatmentPage from "../_components/TreatmentPage";
import { buildMetadata } from "@/lib/seo";
import { getTreatment } from "../_data/tratamientos";

const treatment = getTreatment("dolor-cervical");

export const metadata = buildMetadata({
  title: treatment.metaTitle,
  description: treatment.metaDescription,
  path: treatment.path,
});

export default function DolorCervicalPage() {
  return <TreatmentPage treatment={treatment} />;
}

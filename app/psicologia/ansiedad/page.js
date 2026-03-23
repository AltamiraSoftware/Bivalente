import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("ansiedad");

export const metadata = getTreatmentMetadata("ansiedad");

export default function AnsiedadPage() {
  return <TreatmentPage treatment={treatment} />;
}

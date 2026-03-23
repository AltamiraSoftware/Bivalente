import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("trauma");

export const metadata = getTreatmentMetadata("trauma");

export default function TraumaPage() {
  return <TreatmentPage treatment={treatment} />;
}

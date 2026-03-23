import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("autoestima");

export const metadata = getTreatmentMetadata("autoestima");

export default function AutoestimaPage() {
  return <TreatmentPage treatment={treatment} />;
}

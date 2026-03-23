import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("crisis-emocional");

export const metadata = getTreatmentMetadata("crisis-emocional");

export default function CrisisEmocionalPage() {
  return <TreatmentPage treatment={treatment} />;
}

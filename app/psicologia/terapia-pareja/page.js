import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("terapia-pareja");

export const metadata = getTreatmentMetadata("terapia-pareja");

export default function TerapiaParejaPage() {
  return <TreatmentPage treatment={treatment} />;
}

import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("depresion");

export const metadata = getTreatmentMetadata("depresion");

export default function DepresionPage() {
  return <TreatmentPage treatment={treatment} />;
}

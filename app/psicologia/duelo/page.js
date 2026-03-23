import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("duelo");

export const metadata = getTreatmentMetadata("duelo");

export default function DueloPage() {
  return <TreatmentPage treatment={treatment} />;
}

import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("psicologia-infanto-juvenil");

export const metadata = getTreatmentMetadata("psicologia-infanto-juvenil");

export default function PsicologiaInfantoJuvenilPage() {
  return <TreatmentPage treatment={treatment} />;
}

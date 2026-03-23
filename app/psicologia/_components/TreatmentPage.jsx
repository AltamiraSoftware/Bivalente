import Footer from "@/components/layout/footer";
import { danielaProfile } from "../_data/tratamientos";
import TreatmentApproach from "./TreatmentApproach";
import TreatmentCTA from "./TreatmentCTA";
import TreatmentFaqs from "./TreatmentFaqs";
import TreatmentHero from "./TreatmentHero";
import TreatmentIntro from "./TreatmentIntro";
import TreatmentProfessionalCard from "./TreatmentProfessionalCard";

export default function TreatmentPage({ treatment }) {
  return (
    <main className="min-h-screen">
      <TreatmentHero treatment={treatment} professional={danielaProfile} />
      <TreatmentIntro treatment={treatment} />
      <TreatmentApproach treatment={treatment} />
      <TreatmentProfessionalCard treatment={treatment} professional={danielaProfile} />
      <TreatmentCTA treatment={treatment} professional={danielaProfile} />
      <TreatmentFaqs treatment={treatment} />
      
      <Footer />
    </main>
  );
}

import Footer from "@/components/layout/footer";
import { danielaProfile } from "../_data/tratamientos";
import TreatmentApproach from "./TreatmentApproach";
import TreatmentCTA from "./TreatmentCTA";
import TreatmentFaqs from "./TreatmentFaqs";
import TreatmentHero from "./TreatmentHero";
import TreatmentIntro from "./TreatmentIntro";
import TreatmentProfessionalCard from "./TreatmentProfessionalCard";

export default function TreatmentPage({
  treatment,
  professional = danielaProfile,
  serviceConfig,
}) {
  return (
    <main className="min-h-screen">
      <TreatmentHero
        treatment={treatment}
        professional={professional}
        serviceConfig={serviceConfig}
      />
      <TreatmentIntro treatment={treatment} />
      <TreatmentApproach treatment={treatment} serviceConfig={serviceConfig} />
      <TreatmentProfessionalCard
        treatment={treatment}
        professional={professional}
        serviceConfig={serviceConfig}
      />
      <TreatmentCTA
        treatment={treatment}
        professional={professional}
        serviceConfig={serviceConfig}
      />
      <TreatmentFaqs treatment={treatment} />

      <Footer />
    </main>
  );
}


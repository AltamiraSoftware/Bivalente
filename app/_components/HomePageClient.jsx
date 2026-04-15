"use client";

import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import { useAuthModal } from "@/hooks/useAuthModal";
import Fisioterapia from "@/components/layout/fisioterapia";
import Footer from "@/components/layout/footer";
import TrustSignals from "@/components/layout/trust-signals";
import TestimonialsSection from "@/components/layout/TestimonialsSection";

const Hero = dynamic(() => import("@/components/layout/hero"), {
  loading: () => <div className="min-h-screen" />,
});

const Psicologia = dynamic(() => import("@/components/layout/psicologia"), {
  loading: () => <div className="py-20" />,
});

const CTA = dynamic(() => import("@/components/layout/cta"), {
  loading: () => <div className="py-20" />,
});

export default function HomePageClient() {
  const { openLogin, openRegister } = useAuthModal();

  return (
    <main>
      <Header openLogin={openLogin} openRegister={openRegister} />
      <Hero openLogin={openLogin} openRegister={openRegister} />
      <TrustSignals />
      <Fisioterapia />
      <Psicologia openRegister={openRegister} />
      <TestimonialsSection theme="hero" />
      <CTA openLogin={openLogin} openRegister={openRegister} />
      <Footer />
    </main>
  );
}

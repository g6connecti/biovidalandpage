/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UrgencyBar } from './components/UrgencyBar.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AuthorityStamps } from './components/AuthorityStamps.tsx';
import { DoctorSection } from './components/DoctorSection.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { Benefits } from './components/Benefits.tsx';
import { Ingredients } from './components/Ingredients.tsx';
import { TreatmentQuiz } from './components/TreatmentQuiz.tsx';
import { PricingKits } from './components/PricingKits.tsx';
import { GuaranteeSection } from './components/GuaranteeSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { SocialProofToast } from './components/SocialProofToast.tsx';
import { WhatsAppSupportModal } from './components/WhatsAppSupportModal.tsx';
import { KITS_DATA, KitOption } from './data/landingData.ts';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export default function App() {
  const [selectedKit, setSelectedKit] = useState<KitOption>(KITS_DATA[1]); // Default to 5 months (Campeão)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCheckoutWithKit = (kit: KitOption) => {
    setSelectedKit(kit);
    setIsCheckoutOpen(true);
  };

  const handleSelectKitFromQuiz = (kitId: string) => {
    const found = KITS_DATA.find((k) => k.id === kitId) || KITS_DATA[1];
    setSelectedKit(found);
    scrollToOffers();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans selection:bg-teal-600 selection:text-white flex flex-col">
      {/* 1. Top Urgency Bar with Realtime Countdown */}
      <UrgencyBar />

      {/* 2. Top Navigation Bar */}
      <Header onSelectKitClick={scrollToOffers} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Hero Section with 7-Day Promise and Product Showcase */}
        <Hero onCtaClick={scrollToOffers} />

        {/* 4. Authority Seals & Regulatory Proofs */}
        <AuthorityStamps />

        {/* 5. Benefits of Biovein */}
        <Benefits onCtaClick={scrollToOffers} />

        {/* 6. Medical Endorsement / Doctor View */}
        <DoctorSection onLearnMoreClick={scrollToOffers} />

        {/* 7. Interactive Before & After Comparison Slider */}
        <BeforeAfterSlider onCtaClick={scrollToOffers} />

        {/* 8. 5 Botanical Active Ingredients Deep-Dive */}
        <Ingredients onSelectKitClick={scrollToOffers} />

        {/* 9. Interactive Symptom Quiz & Treatment Simulator */}
        <TreatmentQuiz onSelectKit={handleSelectKitFromQuiz} />

        {/* 10. Pricing & Offer Section with 3 Kits + CEP Calculator */}
        <PricingKits
          onSelectKit={handleOpenCheckoutWithKit}
          selectedKitId={selectedKit.id}
        />

        {/* 11. 90-Day Money Back Guarantee */}
        <GuaranteeSection onCtaClick={scrollToOffers} />

        {/* 12. Verified Customer Testimonials */}
        <TestimonialsSection />

        {/* 13. Interactive FAQ Accordion */}
        <FaqSection onOpenSupport={() => setIsSupportOpen(true)} />
      </main>

      {/* 14. Footer with Regulatory & Legal Data */}
      <Footer />

      {/* Floating Interactive Elements */}
      {/* Real-time verified purchases notification */}
      <SocialProofToast />

      {/* Floating WhatsApp Support Trigger */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsSupportOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-600/40 flex items-center gap-2 font-bold text-xs sm:text-sm border-2 border-emerald-400/50 transition-transform active:scale-95 group"
          aria-label="Abrir suporte no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
          </div>
          <span className="hidden sm:inline">Dúvidas? Fale Conosco</span>
        </button>
      </div>

      {/* Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedKit={selectedKit}
      />

      <WhatsAppSupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </div>
  );
}

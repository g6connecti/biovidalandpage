import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Truck, ArrowRight, Sparkles } from 'lucide-react';
import heroBioveinImg from '../assets/images/hero_biovein_bottles_1794021825087.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-teal-950 via-teal-900 to-emerald-950 text-white overflow-hidden pb-16 pt-8 sm:pt-12 border-b-4 border-teal-500/80">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-teal-500/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Kicker Label (Clean Unboxed Pill-Free Style) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 text-teal-950 px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-teal-950 fill-teal-950 shrink-0" />
            <span>Fórmula Inédita no Brasil · Alta Eficácia Vascular</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white drop-shadow-md text-balance">
            ELIMINE VARIZES E VASINHOS VISÍVEIS EM{' '}
            <span className="text-teal-300 underline decoration-teal-400/80 decoration-wavy decoration-2">
              APENAS 7 DIAS
            </span>
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-teal-100/95 max-w-3xl mx-auto leading-relaxed">
            A fórmula fitoterápica com <strong className="text-white font-bold">Pinus Pinaster Puro</strong> e{' '}
            <strong className="text-white font-bold">Vitis Vinifera Francesa</strong> que desobstrui o fluxo sanguíneo,
            acaba com as dores, queimação e inchaço, devolvendo pernas lisinhas e leves sem cirurgias.
          </p>
        </div>

        {/* Hero Interactive 3-Zone Card */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-teal-950/70 p-5 sm:p-8 rounded-3xl border border-teal-400/30 backdrop-blur-md shadow-2xl">
          {/* Left Column: Proof & Key Fast Facts */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
            <div className="bg-white/10 p-5 rounded-2xl border border-teal-300/20 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-amber-300 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.9/5 (18.420 avaliações)</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-100 italic leading-relaxed">
                "Em 6 dias a queimação desapareceu completamente. As veias arroxeadas da minha panturrilha murcharam e voltei a usar vestidos!"
              </p>
              <div className="mt-3 text-xs font-semibold text-teal-300 flex items-center justify-between">
                <span>— Maria C., 52 anos, Curitiba/PR</span>
                <span className="text-[10px] text-emerald-300 font-mono">Compra Verificada</span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-teal-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Restaura a circulação e drena líquidos retidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero dor, pontadas ou sensação de pernas pesadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cápsulas 100% naturais sem efeitos colaterais</span>
              </div>
            </div>
          </div>

          {/* Center Column: High Quality Product Presentation */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center relative">
            <div className="absolute -top-3.5 right-4 z-20 bg-gradient-to-r from-teal-400 to-emerald-400 text-teal-950 font-black text-[11px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xl">
              Fórmula Original Biovein
            </div>
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-400/40 to-emerald-400/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative overflow-hidden rounded-2xl bg-white/10 p-2 border border-teal-300/40 shadow-2xl backdrop-blur-sm">
                <img
                  src={heroBioveinImg}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/hero_biovein_bottles.jpg';
                  }}
                  alt="Biovein Fitoterapia Vascular - Frasco Oficial com Pinus Pinaster e Vitis Vinifera"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl transition duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md rounded-xl p-2.5 border border-teal-400/30 text-center">
                  <div className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">
                    Frascos Lacrados de Fábrica · 60 Cápsulas de Alta Pureza
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Teaser & Primary CTA */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center lg:items-stretch text-center lg:text-left space-y-4">
            <div className="bg-teal-950/90 p-4 rounded-2xl border border-teal-400/40 text-center shadow-lg">
              <span className="text-[11px] uppercase text-teal-300 font-extrabold tracking-wider">
                Promoção Especial Hoje
              </span>
              <div className="text-3xl sm:text-4xl font-heading font-black text-white mt-1">
                Até 70% OFF
              </div>
              <div className="text-xs text-teal-200 mt-1 flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Frete Grátis para todo o Brasil</span>
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full cta-pulse bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-white font-heading font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-orange-500/35 text-center flex items-center justify-center gap-2 border-2 border-amber-200 transition-transform active:scale-[0.98]"
            >
              <span>SIM! QUERO ELIMINAR VARIZES</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>

            <div className="text-center text-[11px] text-teal-200 space-y-1">
              <div className="flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>Compra 100% Segura & Criptografada</span>
              </div>
              <div className="text-emerald-300 font-bold">
                Garantia Incondicional de 90 Dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { INGREDIENTS_DATA } from '../data/landingData.ts';
import { Leaf, FlaskConical, Sparkles, Check, BookOpen } from 'lucide-react';
import botanicalIngredientsImg from '../assets/images/botanical_pinus_grape_1794021824942.jpg';

interface IngredientsProps {
  onSelectKitClick: () => void;
}

export const Ingredients: React.FC<IngredientsProps> = ({ onSelectKitClick }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="ingredientes" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200">
            Sinergia Fitoterápica Avançada
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 leading-tight">
            Os 5 Ingredientes que Fazem o <span className="text-teal-700">Biovein Ser Único</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Enquanto outros produtos usam ervas comuns sem padronização, o Biovein combina extratos concentrados importados com dosagens clinicamente testadas.
          </p>
        </div>

        {/* Botanical Research Showcase Banner */}
        <div className="mb-12 bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-64 sm:h-80 relative">
            <img
              src={botanicalIngredientsImg}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/botanical_pinus_grape.jpg';
              }}
              alt="Matérias-primas botânicas puras: Pinus Pinaster, Vitis Vinifera e Castanha da Índia"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <FlaskConical className="w-4 h-4 text-teal-700" />
              <span>Matérias-Primas com Laudo de Pureza HPLC</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Concentração Terapêutica 7x Mais Potente
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              O processo de microencapsulamento vegetal do Biovein assegura que os polifenóis e proantocianidinas sobrevivam aos ácidos gástricos do estômago, garantindo 98,4% de biodisponibilidade na corrente sanguínea.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Glúten e Lactose</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Vegano e Não OGM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sem Corantes Sintéticos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cápsulas de Fácil Deglutição</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Ingredient Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INGREDIENTS_DATA.map((item, idx) => {
            const isMarquee = idx === 0;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border-2 transition-all flex flex-col justify-between ${
                  isMarquee
                    ? 'bg-teal-50/50 border-teal-500 shadow-md ring-2 ring-teal-100'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-md">
                      ATIVO #{item.num}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900">
                    {item.name}
                  </h3>
                  <p className="text-xs font-bold text-teal-700 mt-0.5 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.mechanism}
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-3 text-[11px] text-slate-500 flex items-start gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                  <span className="italic">{item.clinicalStudy}</span>
                </div>
              </div>
            );
          })}

          {/* Sinergy Summary Card */}
          <div className="bg-gradient-to-br from-teal-900 to-emerald-950 text-white p-6 sm:p-7 rounded-3xl border-2 border-teal-400/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-teal-400 text-teal-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sinergia Biovein 7x</span>
              </div>
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-2">
                Efeito Cascata Vascular
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                A combinação sinérgica destes 5 fitonutrientes acelera a regeneração das veias em um ritmo 7 vezes mais rápido do que tomar qualquer um deles isoladamente.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onSelectKitClick}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl text-center shadow-lg transition-transform active:scale-[0.98]"
              >
                VER KITS COM A FÓRMULA COMPLETA →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

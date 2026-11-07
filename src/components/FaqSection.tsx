import React, { useState } from 'react';
import { FAQ_DATA } from '../data/landingData.ts';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenSupport: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSupport }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 mt-4 leading-tight">
            Perguntas Frequentes sobre o <span className="text-teal-700">Biovein®</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Transparência total para que você inicie seu tratamento com tranquilidade e confiança.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-slate-900 text-sm sm:text-base hover:text-teal-800 transition-colors"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-teal-200 p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-slate-900 text-base">
                Ainda tem alguma dúvida específica?
              </h4>
              <p className="text-xs text-slate-500">
                Fale agora com nossa equipe de especialistas vasculares de plantão no WhatsApp.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenSupport}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-600/20 whitespace-nowrap shrink-0 transition-colors"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

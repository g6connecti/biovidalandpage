import React from 'react';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-teal-400/15 text-teal-300 font-bold text-xs uppercase px-4 py-1.5 rounded-full mb-4 border border-teal-400/30">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Garantia Blindada de Satisfação</span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Teste por 90 Dias ou Seu Dinheiro de Volta
        </h2>

        <div className="my-8 max-w-2xl mx-auto">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-tr from-teal-500 to-emerald-400 p-1 flex items-center justify-center shadow-2xl shadow-teal-500/20 mb-6">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center text-center p-2">
              <span className="font-heading font-black text-2xl sm:text-3xl text-emerald-300 leading-none">90</span>
              <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">DIAS</span>
              <span className="text-[9px] text-teal-400 uppercase font-semibold">RISCO ZERO</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Temos absoluta convicção na eficácia do <strong className="text-white font-bold">Biovein®</strong>.
            Por isso, tiramos todo o risco das suas costas e colocamos nas nossas. Se você utilizar as cápsulas por 90 dias
            e não notar alívio nas dores, queimação e redução visível nas veias das suas pernas, basta nos enviar um e-mail ou mensagem
            no WhatsApp. Devolvemos <strong className="text-emerald-400 font-bold">100% do valor pago</strong>, mesmo que os frascos estejam vazios.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-white font-heading font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/30 border border-amber-300/40 transition-transform active:scale-[0.98]"
          >
            <span>QUERO TESTAR COM RISCO ZERO</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-4">
          <span>✓ Sem perguntas constrangedoras</span>
          <span>·</span>
          <span>✓ Devolução total via Pix</span>
          <span>·</span>
          <span>✓ Suporte humanizado</span>
        </div>
      </div>
    </section>
  );
};

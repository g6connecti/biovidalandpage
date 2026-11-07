import React from 'react';
import { ShieldCheck, Truck, Lock, Award, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 sm:py-16 border-t border-slate-850">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Top footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center font-black text-white text-lg shadow-md">
              BV
            </div>
            <div>
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                BIOVEIN<span className="text-teal-400">®</span>
              </span>
              <p className="text-[11px] text-slate-400">Laboratório Vascular & Fitoterapia Avançada</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <a href="#beneficios" className="hover:text-teal-400 transition-colors">Benefícios</a>
            <span className="text-slate-700">·</span>
            <a href="#ingredientes" className="hover:text-teal-400 transition-colors">Fórmula Ativa</a>
            <span className="text-slate-700">·</span>
            <a href="#resultados" className="hover:text-teal-400 transition-colors">Resultados</a>
            <span className="text-slate-700">·</span>
            <a href="#ofertas" className="hover:text-teal-400 transition-colors">Kits & Preços</a>
            <span className="text-slate-700">·</span>
            <a href="#faq" className="hover:text-teal-400 transition-colors">Dúvidas Frequentes</a>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="space-y-4 max-w-4xl mx-auto text-center text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Aviso Legal & Isenção Sanitária:</strong> Os resultados podem variar de organismo para organismo dependendo do grau de insuficiência venosa, hábitos de vida e disciplina no tratamento. Este produto não substitui orientações médicas especializadas.
            Produto dispensado de registro sanitário nos termos da RDC 240/2018 e RDC 27/2010 da Anvisa (Agência Nacional de Vigilância Sanitária).
          </p>
          <p>
            As informações e dados científicos contidos neste site oficial têm propósito exclusivamente informativo e de educação em saúde vascular preventiva.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-850 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © 2026 Biovein do Brasil Nutracêuticos Ltda. CNPJ: 42.189.924/0001-18. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Políticas de Privacidade</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Termos de Uso</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Rastrear Pedido</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

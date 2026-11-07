import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onSelectKitClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectKitClick }) => {
  return (
    <nav aria-label="Navegação principal" className="bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 sticky top-[37px] z-40 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center font-heading font-black text-white text-base shadow-md group-hover:bg-teal-500 transition-colors">
            BV
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-tight">
              BIOVEIN<span className="text-teal-400">®</span>
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
          <a href="#beneficios" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Benefícios
          </a>
          <a href="#ingredientes" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Fórmula Ativa
          </a>
          <a href="#simulador" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Simulador
          </a>
          <a href="#resultados" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Resultados 7 Dias
          </a>
          <a href="#ofertas" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Kits & Ofertas
          </a>
          <a href="#faq" className="hover:text-teal-400 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </div>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSelectKitClick}
            className="cta-pulse bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 shrink-0 text-amber-200" />
            <span>Garantir Desconto</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

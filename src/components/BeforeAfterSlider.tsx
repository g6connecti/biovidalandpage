import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import vascularLegsImg from '../assets/images/vascular_circulation_legs_1794021826359.jpg';

interface BeforeAfterSliderProps {
  onCtaClick: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onCtaClick }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="resultados" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-teal-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-4 py-1.5 rounded-full border border-teal-500/30">
            Evolução Clínica Documentada
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-4 leading-tight">
            Veja a Transformação Real em <span className="text-teal-400">Apenas 7 a 30 Dias</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Arraste o cursor interativo para comparar o aspecto antes do tratamento e o resultado após a ação desobstrutora do Biovein®.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          {/* Interactive Split Image Area */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden select-none border-2 border-slate-700 shadow-xl">
              {/* After Image (Full Background) */}
              <img
                src={vascularLegsImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/vascular_circulation_legs.jpg';
                }}
                alt="Pernas saudáveis, lisas e sem varizes após Biovein"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Depois (Biovein®)
              </div>

              {/* Before Overlay Layer (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={vascularLegsImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/vascular_circulation_legs.jpg';
                    }}
                    alt="Pernas com varizes e inchaço antes do Biovein"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-150 brightness-90 hue-rotate-[320deg]"
                    referrerPolicy="no-referrer"
                    style={{
                      width: '100%',
                      minWidth: '500px',
                    }}
                  />
                  {/* Subtle visual simulation of vein congestion */}
                  <div className="absolute inset-0 bg-red-950/20 mix-blend-color-burn" />
                </div>
                <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Antes (Varizes & Edema)
                </div>
              </div>

              {/* Divider Line & Interactive Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-teal-500 text-white shadow-xl flex items-center justify-center border-2 border-white -ml-4">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range input overlay for smooth touch and drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Controle deslizante de comparação antes e depois"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
              <span>← Arraste para esquerda (Antes)</span>
              <span className="font-semibold text-teal-400">Deslize para ver a mudança</span>
              <span>Arraste para direita (Depois) →</span>
            </div>
          </div>

          {/* Clinical Milestones List */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-black text-2xl text-white">
              O que acontece no seu corpo:
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-teal-400 font-bold">1º AO 7º DIA</span>
                  <span className="text-emerald-400 font-semibold">Alívio Rápido</span>
                </div>
                <h4 className="font-bold text-white text-sm">Fim da Queimação e Peso</h4>
                <p className="text-xs text-slate-300 mt-1">
                  A Vitis Vinifera ativa o óxido nítrico endotelial. O peso ao fim do dia cai em até 70% e você volta a caminhar com leveza.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-teal-400 font-bold">15º AO 30º DIA</span>
                  <span className="text-emerald-400 font-semibold">Regeneração Visível</span>
                </div>
                <h4 className="font-bold text-white text-sm">Murchamento das Veias</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Os OPCs do Pinus Pinaster fecham as microfissuras e reparam o colágeno venoso. Os cordões grossos murcham e os tornozelos desincham.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-teal-400 font-bold">60º AO 90º DIA</span>
                  <span className="text-emerald-400 font-semibold">Blindagem Total</span>
                </div>
                <h4 className="font-bold text-white text-sm">Pernas Lisas e Firmes</h4>
                <p className="text-xs text-slate-300 mt-1">
                  A Rutina e a Centella selam a parede capilar. A pele recupera o tom homogêneo e novas dilatações são bloqueadas.
                </p>
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full bg-orange-500 hover:bg-orange-400 text-white font-heading font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/25 transition-all text-center block text-sm"
            >
              QUERO ESSA TRANSFORMAÇÃO NAS MINHAS PERNAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

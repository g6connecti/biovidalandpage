import React, { useState } from 'react';
import { KITS_DATA, KitOption } from '../data/landingData.ts';
import { Check, ShieldCheck, Truck, Sparkles, ArrowRight, MapPin } from 'lucide-react';

interface PricingKitsProps {
  onSelectKit: (kit: KitOption) => void;
  selectedKitId?: string;
}

export const PricingKits: React.FC<PricingKitsProps> = ({ onSelectKit, selectedKitId = 'kit-5' }) => {
  const [cep, setCep] = useState<string>('');
  const [freightCalculated, setFreightCalculated] = useState<boolean>(false);
  const [freightDays, setFreightDays] = useState<string>('3 a 5 dias úteis');

  const handleCalculateCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.replace(/\D/g, '').length >= 8) {
      setFreightCalculated(true);
      const cleanCep = cep.replace(/\D/g, '');
      const prefix = parseInt(cleanCep.substring(0, 2), 10);
      if (prefix <= 19) {
        setFreightDays('2 a 4 dias úteis (SP e Região)');
      } else if (prefix <= 39) {
        setFreightDays('3 a 5 dias úteis (Sudeste)');
      } else if (prefix <= 79) {
        setFreightDays('4 a 6 dias úteis (Centro-Oeste / Sul)');
      } else {
        setFreightDays('5 a 7 dias úteis (Norte / Nordeste)');
      }
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 8) val = val.substring(0, 8);
    if (val.length > 5) {
      val = `${val.substring(0, 5)}-${val.substring(5)}`;
    }
    setCep(val);
  };

  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-gradient-to-b from-white via-teal-50/20 to-slate-100 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-900 bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200">
            Oferta Especial de Lançamento
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 mt-4 leading-tight">
            Escolha o Kit Ideal para o <span className="text-teal-700">Seu Tratamento</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Recomendamos de 3 a 5 meses para restauração celular e fechamento duradouro das válvulas venosas.
          </p>
        </div>

        {/* CEP Delivery Calculator Bar */}
        <div className="max-w-xl mx-auto mb-12 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          <form onSubmit={handleCalculateCep} className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 w-full sm:flex-1">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <input
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="Informe seu CEP (ex: 01310-100)"
                maxLength={9}
                className="bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shrink-0"
            >
              Consultar Frete
            </button>
          </form>

          {freightCalculated ? (
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Frete Grátis via Sedex Expresso</span>
              </span>
              <span className="bg-emerald-100 px-2.5 py-0.5 rounded-md text-emerald-800">
                Prazo estimado: {freightDays}
              </span>
            </div>
          ) : (
            <div className="mt-2 text-[11px] text-slate-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
              <Truck className="w-3.5 h-3.5 text-teal-600" />
              <span>Frete Grátis com rastreamento para todas as regiões do Brasil hoje.</span>
            </div>
          )}
        </div>

        {/* Pricing Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {KITS_DATA.map((kit) => {
            const isHighlight = kit.isPopular;
            const isTargeted = selectedKitId === kit.id;

            return (
              <div
                key={kit.id}
                className={`bg-white rounded-3xl transition-all flex flex-col justify-between relative ${
                  isHighlight
                    ? 'border-3 border-teal-600 shadow-2xl md:-translate-y-4 p-6 sm:p-8 ring-4 ring-teal-100'
                    : 'border-2 border-slate-200 shadow-md p-6 sm:p-7 hover:border-slate-300'
                } ${isTargeted && !isHighlight ? 'ring-2 ring-orange-400' : ''}`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                    <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-700 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-lg shimmer-badge flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{kit.discountBadge}</span>
                    </span>
                  </div>
                )}

                {!isHighlight && kit.discountBadge && (
                  <div className="text-center mb-2">
                    <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                      {kit.discountBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center mb-4">
                    <h3 className="font-heading font-black text-xl text-slate-900">
                      {kit.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {kit.subtitle}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div className="text-center my-4 py-4 px-3 bg-teal-50/60 rounded-2xl border border-teal-100">
                    <div className="text-xs text-slate-400 line-through">
                      De R$ {kit.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-xs font-bold text-slate-700 uppercase mt-0.5">
                      12x de
                    </div>
                    <div className="font-heading font-black text-4xl sm:text-5xl text-teal-800 tracking-tight">
                      R$ {kit.installments.value.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-xs text-slate-600 font-semibold mt-1">
                      ou R$ {kit.cashPrice.toFixed(2).replace('.', ',')} à vista no Pix
                    </div>
                    <div className="text-[11px] font-mono text-emerald-700 font-bold mt-1 bg-emerald-100/60 py-0.5 px-2 rounded-full inline-block">
                      {kit.dailyCost}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                    {kit.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={kit.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl font-heading font-extrabold text-base transition-all text-center flex items-center justify-center gap-2 ${
                      isHighlight
                        ? 'cta-pulse bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 text-white shadow-xl shadow-orange-500/35 border-2 border-amber-200'
                        : 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 active:scale-[0.98]'
                    }`}
                  >
                    <span>COMPRAR AGORA</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>

                  <div className="mt-3 text-center text-[11px] text-slate-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                    <span>Garantia de 90 Dias · Satisfação ou Reembolso</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security badges row */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Formas de Pagamento e Segurança Certificada
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">⚡ Pix com Envio Imediato</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">💳 Cartão de Crédito em até 12x</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">📄 Boleto Bancário</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">🔒 Criptografia SSL 256 bits</span>
          </div>
        </div>
      </div>
    </section>
  );
};

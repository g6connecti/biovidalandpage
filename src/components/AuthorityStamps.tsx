import React from 'react';
import { Award, ShieldCheck, Leaf, Truck, CheckCircle2 } from 'lucide-react';

export const AuthorityStamps: React.FC = () => {
  const stamps = [
    {
      icon: Award,
      title: 'Dispensado Anvisa',
      subtitle: 'Conforme RDC 240/2018',
      desc: 'Segurança sanitária rigorosa',
    },
    {
      icon: ShieldCheck,
      title: 'Garantia de 90 Dias',
      subtitle: 'Satisfação ou Reembolso',
      desc: '100% do seu dinheiro de volta',
    },
    {
      icon: Leaf,
      title: '100% Fitoterápico',
      subtitle: 'Sem Efeitos Colaterais',
      desc: 'Não agride estômago nem fígado',
    },
    {
      icon: Truck,
      title: 'Frete Grátis Brasil',
      subtitle: 'Envio com Seguro e Rastreio',
      desc: 'Entrega rápida pelos Correios',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stamps.map((stamp, idx) => {
            const Icon = stamp.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-500/40 hover:bg-teal-50/20 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {stamp.title}
                  </h4>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">
                    {stamp.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">
                    {stamp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

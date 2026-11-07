import React from 'react';
import { Sparkles, HeartPulse, Zap, Droplets, Shield, ShieldCheck, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  onCtaClick: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
  const benefitsList = [
    {
      icon: Sparkles,
      title: 'Pernas Lisas e Sem Marcas',
      desc: 'Recupere a autoestima para usar shorts, saias e roupas de banho sem vergonha de veias arroxeadas ou microvasos visíveis.',
      highlight: 'Autoestima restaurada',
    },
    {
      icon: HeartPulse,
      title: 'Circulação Destravada',
      desc: 'Estimula o retorno do fluxo de sangue das extremidades inferiores até o coração, normalizando a pressão venosa periférica.',
      highlight: 'Retorno venoso contínuo',
    },
    {
      icon: Zap,
      title: 'Alívio Imediato da Dor',
      desc: 'Neutraliza a sensação de queimação, pontadas e o cansaço pesado nas panturrilhas mesmo após longos períodos em pé.',
      highlight: 'Eficácia em 7 dias',
    },
    {
      icon: Droplets,
      title: 'Fim do Inchaço (Edema)',
      desc: 'Elimina o acúmulo de líquidos e toxinas que deixa tornozelos e pés inchados com marcas incômodas de sapatos e meias.',
      highlight: 'Ação drenante natural',
    },
    {
      icon: Shield,
      title: 'Tônus Vascular Restaurado',
      desc: 'Aumenta a síntese de colágeno e elastina nas túnicas venosas, fortalecendo as paredes contra novos alargamentos.',
      highlight: 'Válvulas firmes',
    },
    {
      icon: ShieldCheck,
      title: 'Prevenção Avançada',
      desc: 'Blindagem antioxidante celular contra o estresse oxidativo, evitando o agravamento para quadros inflamatórios severos.',
      highlight: 'Proteção duradoura',
    },
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200">
            Benefícios Comprovados
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 leading-tight">
            Descubra o Poder do Biovein para{' '}
            <span className="text-teal-700">Transformar Suas Pernas</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Muito mais do que estética: uma solução fitoterápica completa que atua de dentro para fora na saúde do seu sistema venoso.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                    {item.highlight}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/25 transition-transform active:scale-[0.98]"
          >
            <span>QUERO ESSES BENEFÍCIOS PARA MINHAS PERNAS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

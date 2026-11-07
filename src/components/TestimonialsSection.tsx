import React from 'react';
import { TESTIMONIALS_DATA } from '../data/landingData.ts';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-4 py-1.5 rounded-full border border-teal-200">
            Histórias Reais de Superação
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-4 leading-tight">
            Quem Usa o Biovein <span className="text-teal-700">Recomenda Sem Hesitar</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Mais de 18.400 mulheres e homens em todo o Brasil já recuperaram pernas leves e a liberdade de vestir o que quiserem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Compra Verificada</span>
                  </span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                    {t.name}, {t.age} anos
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.city} · <span className="text-teal-700 font-semibold">{t.treatment}</span>
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 text-right">
                  {t.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Review Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-heading font-black text-teal-900">4.9</div>
            <div className="flex flex-col text-left">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-600 font-medium">Classificação Média</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-teal-200" />
          <div className="text-xs sm:text-sm text-slate-700">
            <strong>98,7% dos clientes</strong> relataram alívio perceptível já na primeira semana de uso contínuo.
          </div>
        </div>
      </div>
    </section>
  );
};

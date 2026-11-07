import React from 'react';
import { Stethoscope, CheckCircle, ArrowRight, Activity, ShieldCheck } from 'lucide-react';

interface DoctorSectionProps {
  onLearnMoreClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Doctor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-50 bg-slate-100">
              <img
                src="/src/assets/images/doctor_vascular_specialist_1794021825888.jpg"
                alt="Dra. Beatriz Silva - Especialista em Angiologia e Cirurgia Vascular"
                className="w-full h-auto object-cover object-top max-h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 text-white border border-slate-700/60">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal-400" />
                  <span className="font-heading font-bold text-sm text-white">Dra. Beatriz Silva</span>
                </div>
                <p className="text-xs text-teal-200 mt-0.5">
                  Especialista em Angiologia e Doenças Venosas · CRM 142.890-SP
                </p>
                <div className="mt-2 text-[11px] text-slate-300 border-t border-slate-700/60 pt-2 flex items-center justify-between">
                  <span>Membro da Sociedade Brasileira de Angiologia</span>
                  <span className="text-emerald-400 font-semibold">Parecer Clínico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Insights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-teal-700" />
              <span>Visão da Angiologia Moderna</span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 leading-tight">
              "A maioria das varizes não exige cirurgias invasivas quando tratamos a{' '}
              <span className="text-teal-700">causa raiz do refluxo venoso</span>"
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              O sangue das pernas precisa subir contra a gravidade de volta ao coração através de válvulas venosas.
              Quando essas válvulas sofrem desgaste oxidativo e inflamação crônica, o sangue reflui e acumula, dilatando
              as veias superficiais em formato de cordões arroxeadas dolorosos.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h4 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                Como a associação do Biovein age no seu sistema circulatório:
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">1. Restauração das Válvulas:</strong> O Pinus Pinaster fortalece o colágeno e sela as paredes dos vasos, normalizando a pressão hidrostática.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">2. Desobstrução do Sangue Estagnado:</strong> A Vitis Vinifera e a Rutina dilatam microcapilares, promovendo o retorno venoso imediato.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">3. Drenagem Linfática Rápida:</strong> A Escina (Castanha da Índia) impede o extravasamento de líquidos, desinchando pés e tornozelos.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-900 underline underline-offset-4"
              >
                <span>Ver opções de kits recomendados para seu grau</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

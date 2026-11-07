import React, { useState } from 'react';
import { Activity, CheckCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface TreatmentQuizProps {
  onSelectKit: (kitId: string) => void;
}

export const TreatmentQuiz: React.FC<TreatmentQuizProps> = ({ onSelectKit }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSymptom, setSelectedSymptom] = useState<string>('c');
  const [selectedDuration, setSelectedDuration] = useState<string>('medium');
  const [selectedRoutine, setSelectedRoutine] = useState<string>('standing');
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsCalculated(false);
  };

  // Determine recommended kit based on answers
  let recommendedKitId = 'kit-5';
  let severityGrade = 'Grau II (Insuficiência Venosa Moderada)';
  let expectedRecovery = 'Alívio da queimação em 7 dias · Murchamento das veias dilatadas em 30 a 60 dias';

  if (selectedSymptom === 'a' && selectedDuration === 'short') {
    recommendedKitId = 'kit-3';
    severityGrade = 'Grau I (Sobrecarga Circulatória Inicial)';
    expectedRecovery = 'Alívio total do peso e queimação entre o 3º e 7º dia de tratamento.';
  } else if (selectedSymptom === 'c' || selectedDuration === 'chronic' || selectedSymptom === 'd') {
    recommendedKitId = 'kit-5';
    severityGrade = 'Grau II a III (Válvulas Venosas Comprometidas)';
    expectedRecovery = 'Desobstrução do fluxo venoso em 7 dias · Redução profunda do calibre vascular e inchaço.';
  }

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 text-teal-700" />
            <span>Simulador Personalizado</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900">
            Descubra o Plano Ideal para o <span className="text-teal-700">Seu Grau de Varizes</span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Responda 3 perguntas rápidas para receber uma recomendação precisa da dosagem e período de restauração vascular.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
          {!isCalculated ? (
            <div className="space-y-8">
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase text-teal-800">
                  Etapa {step} de 3
                </span>
                <div className="flex items-center gap-1.5">
                  <div className={`w-8 h-2 rounded-full ${step >= 1 ? 'bg-teal-600' : 'bg-slate-200'}`} />
                  <div className={`w-8 h-2 rounded-full ${step >= 2 ? 'bg-teal-600' : 'bg-slate-200'}`} />
                  <div className={`w-8 h-2 rounded-full ${step >= 3 ? 'bg-teal-600' : 'bg-slate-200'}`} />
                </div>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                    1. Qual o principal sintoma ou desconforto que você sente hoje?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'a', label: 'Sensação de pernas pesadas, cansaço e queimação ao final do dia' },
                      { id: 'b', label: 'Vasinhos finos avermelhados ou arroxeadas (teias de aranha)' },
                      { id: 'c', label: 'Veias grossas salientes, doloridas e dilatadas nas pernas' },
                      { id: 'd', label: 'Tornozelos e pés inchados com marcas profundas de meias' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedSymptom(opt.id)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${
                          selectedSymptom === opt.id
                            ? 'border-teal-600 bg-teal-50/50 text-slate-900 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedSymptom === opt.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                        }`}>
                          {selectedSymptom === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2"
                    >
                      <span>Avançar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                    2. Há quanto tempo você convive com essas queixas?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'short', label: 'Menos de 6 meses', desc: 'Começou recentemente' },
                      { id: 'medium', label: 'De 6 meses a 2 anos', desc: 'Sintomas já frequentes' },
                      { id: 'chronic', label: 'Mais de 2 anos', desc: 'Crônico e recorrente' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedDuration(opt.id)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                          selectedDuration === opt.id
                            ? 'border-teal-600 bg-teal-50/50 text-slate-900 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span className="text-sm font-bold text-slate-900">{opt.label}</span>
                        <span className="text-xs text-slate-500 mt-1">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="text-slate-600 hover:text-slate-900 font-semibold text-sm px-4 py-2"
                    >
                      ← Voltar
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2"
                    >
                      <span>Avançar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                    3. Como é a sua rotina diária?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'standing', label: 'Fico muitas horas em pé (ex: trabalho, vendas, enfermagem)' },
                      { id: 'sitting', label: 'Fico sentada no computador por longos períodos' },
                      { id: 'sedentary', label: 'Pratico pouca caminhada e sinto peso nas articulações' },
                      { id: 'hereditary', label: 'Família tem histórico forte de varizes e trombose' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedRoutine(opt.id)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3 ${
                          selectedRoutine === opt.id
                            ? 'border-teal-600 bg-teal-50/50 text-slate-900 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedRoutine === opt.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                        }`}>
                          {selectedRoutine === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="text-slate-600 hover:text-slate-900 font-semibold text-sm px-4 py-2"
                    >
                      ← Voltar
                    </button>
                    <button
                      onClick={handleCalculate}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Ver Meu Diagnóstico & Kit Recomendado</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Diagnostic Result */
            <div className="space-y-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Resultado da Análise
                  </span>
                  <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
                    {severityGrade}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer teste</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                  <CheckCircle className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>Plano Prescrito: {recommendedKitId === 'kit-5' ? 'Tratamento 5 Meses (Campeão)' : 'Tratamento 3 Meses'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Para restaurar o tônus das válvulas venosas e desinflamar o tecido capilar, seu organismo necessita de pelo menos{' '}
                  <strong className="text-slate-900 font-bold">{recommendedKitId === 'kit-5' ? '150 dias' : '90 dias'} de uso contínuo</strong>{' '}
                  dos polifenóis de Pinus Pinaster e sementes de uva francesa.
                </p>
                <div className="text-xs font-semibold text-teal-800 border-t border-teal-200/60 pt-2">
                  ✓ Expectativa: {expectedRecovery}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectKit(recommendedKitId)}
                  className="w-full sm:w-auto flex-1 bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-base py-4 px-8 rounded-2xl shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 text-center"
                >
                  <span>Ir Direto Para o Meu Kit com Desconto Especial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

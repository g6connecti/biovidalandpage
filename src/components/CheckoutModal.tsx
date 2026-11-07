import React, { useState } from 'react';
import { KitOption } from '../data/landingData.ts';
import { X, ShieldCheck, Lock, Truck, QrCode, CreditCard, FileText, CheckCircle2, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKit: KitOption;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, selectedKit }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState<boolean>(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '',
    address: '',
    number: '',
    city: '',
    state: 'SP',
    installments: '12',
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.substring(0, 11);
    if (val.length > 9) {
      val = `${val.substring(0, 3)}.${val.substring(3, 6)}.${val.substring(6, 9)}-${val.substring(9)}`;
    } else if (val.length > 6) {
      val = `${val.substring(0, 3)}.${val.substring(3, 6)}.${val.substring(6)}`;
    } else if (val.length > 3) {
      val = `${val.substring(0, 3)}.${val.substring(3)}`;
    }
    setFormData((prev) => ({ ...prev, cpf: val }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.substring(0, 11);
    if (val.length > 6) {
      val = `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7)}`;
    } else if (val.length > 2) {
      val = `(${val.substring(0, 2)}) ${val.substring(2)}`;
    }
    setFormData((prev) => ({ ...prev, phone: val }));
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 8) val = val.substring(0, 8);
    if (val.length > 5) {
      val = `${val.substring(0, 5)}-${val.substring(5)}`;
    }
    setFormData((prev) => ({ ...prev, cep: val }));
  };

  const pixPayload = `00020126580014br.gov.bcb.pix0136biovein-vascular-saude-${selectedKit.id}520400005303986540${selectedKit.cashPrice.toFixed(2)}5802BR5915BIOVEIN DO BRASIL6009SAO PAULO62070503***6304E8A9`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixPayload);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleFinalize = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center font-black text-white text-xs">
              BV
            </div>
            <div>
              <h3 className="font-heading font-black text-base text-white flex items-center gap-2">
                <span>Checkout Seguro Biovein®</span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-mono uppercase">
                  SSL 256-Bit
                </span>
              </h3>
              <p className="text-xs text-slate-400">Ambiente blindado e dados criptografados</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <div className="p-5 sm:p-7 max-h-[82vh] overflow-y-auto space-y-6">
            {/* Selected Kit Summary */}
            <div className="bg-teal-50/70 rounded-2xl border border-teal-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-heading font-black text-sm shrink-0">
                  {selectedKit.bottles}x
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                    {selectedKit.name}
                  </h4>
                  <p className="text-xs text-teal-800">{selectedKit.subtitle}</p>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Frete Expresso Grátis Incluso</span>
                  </div>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-teal-200/80 sm:pl-4">
                <div className="text-xs text-slate-400 line-through">
                  R$ {selectedKit.originalPrice.toFixed(2).replace('.', ',')}
                </div>
                <div className="font-heading font-black text-xl text-teal-800">
                  R$ {selectedKit.cashPrice.toFixed(2).replace('.', ',')}
                </div>
                <div className="text-[11px] text-slate-600">
                  ou 12x de R$ {selectedKit.installments.value.toFixed(2).replace('.', ',')}
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Escolha a Forma de Pagamento
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-emerald-600 bg-emerald-50/60 text-emerald-900 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="text-xs font-semibold">Pix Imediato</span>
                  <span className="text-[10px] text-emerald-700 font-bold">Aprovação em 2s</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === 'card'
                      ? 'border-teal-600 bg-teal-50/60 text-teal-900 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-teal-700 mb-1" />
                  <span className="text-xs font-semibold">Cartão</span>
                  <span className="text-[10px] text-slate-500">Até 12x</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center text-center transition-all ${
                    paymentMethod === 'boleto'
                      ? 'border-slate-700 bg-slate-100 text-slate-900 font-bold shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <FileText className="w-5 h-5 text-slate-600 mb-1" />
                  <span className="text-xs font-semibold">Boleto</span>
                  <span className="text-[10px] text-slate-500">À vista</span>
                </button>
              </div>
            </div>

            {/* Buyer Details Form */}
            <form onSubmit={handleFinalize} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Maria Silveira"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    E-mail para Rastreamento *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@gmail.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="text"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="(11) 98765-4321"
                    maxLength={15}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    CPF (para Nota Fiscal) *
                  </label>
                  <input
                    type="text"
                    required
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleCpfChange}
                    placeholder="000.000.000-00"
                    maxLength={14}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="pt-2 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Endereço de Entrega
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">CEP *</label>
                    <input
                      type="text"
                      required
                      name="cep"
                      value={formData.cep}
                      onChange={handleCepChange}
                      placeholder="00000-000"
                      maxLength={9}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Endereço (Rua/Avenida) *</label>
                    <input
                      type="text"
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Av. Paulista, etc."
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Número *</label>
                    <input
                      type="text"
                      required
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Cidade *</label>
                    <input
                      type="text"
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="São Paulo"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Estado *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none bg-white"
                    >
                      {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map((uf) => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* PIX instructions if selected */}
              {paymentMethod === 'pix' && (
                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-4 text-xs text-emerald-900 space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Benefício Pix: Seu pedido entra na fila expressa e é postado no mesmo dia útil!</span>
                  </div>
                  <p className="text-[11px] text-emerald-800/80">
                    Após clicar no botão abaixo, geraremos o QR Code oficial e o código Pix Copia e Cola para pagamento em qualquer aplicativo bancário.
                  </p>
                </div>
              )}

              {/* Card instructions if selected */}
              {paymentMethod === 'card' && (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Parcelamento *</label>
                    <select
                      name="installments"
                      value={formData.installments}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 outline-none bg-white font-medium"
                    >
                      <option value="1">1x de R$ {selectedKit.cashPrice.toFixed(2).replace('.', ',')} (sem juros)</option>
                      <option value="3">3x de R$ {(selectedKit.cashPrice / 3).toFixed(2).replace('.', ',')} (sem juros)</option>
                      <option value="6">6x de R$ {(selectedKit.cashPrice / 6).toFixed(2).replace('.', ',')} (sem juros)</option>
                      <option value="12">12x de R$ {selectedKit.installments.value.toFixed(2).replace('.', ',')}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-heading font-black text-base py-4 px-6 rounded-2xl shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2 transition-transform active:scale-[0.99]"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {paymentMethod === 'pix' ? 'GERAR PIX E CONCLUIR PEDIDO' : 'CONCLUIR PEDIDO COM SEGURANÇA'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* External Checkout Alternative */}
            <div className="text-center pt-2">
              <a
                href={selectedKit.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-500 hover:text-teal-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Preferir finalizar na plataforma externa Braip / Checkout Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* Order Confirmation / Success State */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                Pedido Registrado com Sucesso
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mt-2">
                Parabéns pelo seu passo rumo a pernas leves!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Código de Encomenda: <strong className="font-mono text-slate-900">BR{Math.floor(100000 + Math.random() * 900000)}BV</strong>
              </p>
            </div>

            {paymentMethod === 'pix' && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto space-y-4">
                <div className="text-xs text-slate-700 font-semibold">
                  Escaneie o QR Code ou copie a chave Pix Copia e Cola:
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 inline-block mx-auto shadow-sm">
                  {/* SVG QR Code Simulation */}
                  <svg className="w-44 h-44 mx-auto text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="0" y="0" width="30" height="30" />
                    <rect x="5" y="5" width="20" height="20" fill="white" />
                    <rect x="10" y="10" width="10" height="10" />
                    <rect x="70" y="0" width="30" height="30" />
                    <rect x="75" y="5" width="20" height="20" fill="white" />
                    <rect x="80" y="10" width="10" height="10" />
                    <rect x="0" y="70" width="30" height="30" />
                    <rect x="5" y="75" width="20" height="20" fill="white" />
                    <rect x="10" y="80" width="10" height="10" />
                    <circle cx="50" cy="50" r="8" />
                    <rect x="40" y="20" width="10" height="20" />
                    <rect x="60" y="40" width="15" height="10" />
                    <rect x="45" y="70" width="10" height="15" />
                    <rect x="70" y="70" width="20" height="10" />
                  </svg>
                </div>

                <div className="text-sm font-black text-emerald-800">
                  Valor com Desconto: R$ {selectedKit.cashPrice.toFixed(2).replace('.', ',')}
                </div>

                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Código Pix Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Chave Pix Copia e Cola</span>
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="text-xs text-slate-500 max-w-sm mx-auto space-y-1">
              <div>Enviamos os dados de acesso e rastreamento para seu e-mail.</div>
              <div className="font-semibold text-teal-800">
                Prazo estimado de entrega: 3 a 7 dias úteis via Sedex Expresso.
              </div>
            </div>

            <button
              onClick={onClose}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
            >
              Fechar Janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

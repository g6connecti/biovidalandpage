import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle, ShieldCheck } from 'lucide-react';

interface WhatsAppSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppSupportModal: React.FC<WhatsAppSupportModalProps> = ({ isOpen, onClose }) => {
  const [userMsg, setUserMsg] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Olá! Sou a Mariana, consultora de atendimento clínico do Biovein®. Em que posso te ajudar hoje com suas pernas?',
      time: '14:32',
    },
    {
      sender: 'bot',
      text: 'Você tem dúvidas sobre qual kit escolher, dosagem ou aprovação Anvisa?',
      time: '14:32',
    },
  ]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;

    const newMsg = {
      sender: 'user' as const,
      text: userMsg,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setUserMsg('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Perfeito! Para que nossa farmacêutica vascular responda você em tempo real com seu histórico, clique no botão verde abaixo para abrir o WhatsApp oficial com atendimento imediato.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom duration-200">
        {/* WhatsApp Header */}
        <div className="bg-emerald-700 text-white p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white text-emerald-800 font-bold flex items-center justify-center text-sm shadow">
                BV
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                <span>Atendimento Biovein®</span>
              </h4>
              <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                <span>Online agora</span> · <span>Resposta em ~2 min</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-800 hover:bg-emerald-900 text-emerald-100 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#e5ddd5]/30">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm shadow-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/80'
                }`}
              >
                {m.text}
                <div
                  className={`text-[9px] text-right mt-1 font-mono ${
                    m.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                  }`}
                >
                  {m.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Question Buttons */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex gap-2 overflow-x-auto text-[11px] scrollbar-none">
          <button
            onClick={() => setUserMsg('Qual kit é mais recomendado para varizes grossas?')}
            className="bg-white hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 whitespace-nowrap shrink-0"
          >
            Kit recomendado?
          </button>
          <button
            onClick={() => setUserMsg('O Biovein tem aprovação da Anvisa?')}
            className="bg-white hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 whitespace-nowrap shrink-0"
          >
            Aprovação Anvisa?
          </button>
          <button
            onClick={() => setUserMsg('Como funciona a garantia de 90 dias?')}
            className="bg-white hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 whitespace-nowrap shrink-0"
          >
            Garantia 90 dias?
          </button>
        </div>

        {/* Input & Direct WhatsApp button */}
        <div className="p-3 bg-white border-t border-slate-200 space-y-2">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-600 outline-none"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <a
            href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C+gostaria+de+tirar+d%C3%BAvidas+sobre+o+tratamento+Biovein+para+varizes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar Diretamente no WhatsApp com Especialista</span>
          </a>
        </div>
      </div>
    </div>
  );
};

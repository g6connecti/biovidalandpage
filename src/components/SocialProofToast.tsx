import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, ShoppingBag } from 'lucide-react';

const RECENT_PURCHASES = [
  { name: 'Maria C.', city: 'Curitiba/PR', kit: 'Kit 5 Meses (Campeão)', time: 'há 2 minutos' },
  { name: 'Helena S.', city: 'Belo Horizonte/MG', kit: 'Kit 5 Meses (Campeão)', time: 'há 4 minutos' },
  { name: 'Sandra R.', city: 'São Paulo/SP', kit: 'Kit 10 Meses (Blindagem)', time: 'há 7 minutos' },
  { name: 'Cláudia M.', city: 'Campinas/SP', kit: 'Kit 3 Meses', time: 'há 11 minutos' },
  { name: 'Rosângela A.', city: 'Porto Alegre/RS', kit: 'Kit 5 Meses (Campeão)', time: 'há 14 minutos' },
  { name: 'Fátima B.', city: 'Goiânia/GO', kit: 'Kit 5 Meses (Campeão)', time: 'há 18 minutos' },
];

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const current = RECENT_PURCHASES[currentIndex];

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/90 shadow-xl flex items-center gap-3 transition-all animate-in slide-in-from-bottom-4 duration-300">
      <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
        <ShoppingBag className="w-5 h-5 text-teal-700" />
      </div>

      <div className="min-w-0 pr-2">
        <div className="flex items-center gap-1.5 text-xs text-slate-800 font-semibold leading-tight">
          <span>{current.name}</span>
          <span className="text-slate-400 font-normal">de {current.city}</span>
        </div>
        <p className="text-[11px] text-teal-800 font-bold mt-0.5 truncate">
          comprou o {current.kit}
        </p>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          <span>Compra aprovada · {current.time}</span>
        </div>
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="w-5 h-5 rounded-full hover:bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 self-start -mr-1"
        aria-label="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

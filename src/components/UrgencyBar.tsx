import React, { useState, useEffect } from 'react';
import { Flame, Clock, Users } from 'lucide-react';

export const UrgencyBar: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    const saved = localStorage.getItem('biovein_timer');
    return saved ? parseInt(saved, 10) : 885; // 14 min 45 sec
  });

  const [viewers, setViewers] = useState<number>(142);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev > 1 ? prev - 1 : 900;
        localStorage.setItem('biovein_timer', next.toString());
        return next;
      });
    }, 1000);

    const viewerTimer = setInterval(() => {
      setViewers((prev) => Math.min(198, Math.max(124, prev + (Math.random() > 0.5 ? 2 : -2))));
    }, 4500);

    return () => {
      clearInterval(timer);
      clearInterval(viewerTimer);
    };
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <aside aria-label="Aviso de urgência da promoção" className="bg-gradient-to-r from-teal-950 via-teal-900 to-emerald-950 text-white py-2 px-3 text-xs sm:text-sm font-medium tracking-wide shadow-md sticky top-0 z-50 border-b border-teal-700/40">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
          <Flame className="w-4 h-4 text-emerald-300 animate-pulse shrink-0" />
          <span className="uppercase text-teal-200 font-bold tracking-wider text-[11px] sm:text-xs">
            Atenção Especial:
          </span>
          <span className="text-white/95 text-xs sm:text-sm">
            Desconto de até <strong className="text-emerald-300 font-extrabold">70% liberado hoje</strong> com Frete Grátis
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 mx-auto sm:mx-0">
          <div className="hidden md:flex items-center gap-1.5 text-teal-200/90 text-xs">
            <Users className="w-3.5 h-3.5 text-teal-300" />
            <span><strong className="text-white font-semibold tabular-nums">{viewers}</strong> pessoas visualizando</span>
          </div>

          <div className="flex items-center gap-1.5 bg-teal-950/90 px-3 py-1 rounded-full border border-teal-400/30 shadow-inner">
            <Clock className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="text-teal-100 text-xs">Oferta expira em:</span>
            <span className="font-mono font-bold text-emerald-300 tabular-nums text-sm tracking-wider">
              {formattedTime}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

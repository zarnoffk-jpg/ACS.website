import React from 'react';

export const PropertyHealthMeter: React.FC<{ score: number }> = ({ score }) => {
  const getColor = () => {
    if (score > 80) return 'text-emerald-500';
    if (score > 60) return 'text-[#0066CC]';
    return 'text-rose-500';
  };

  const getStatus = () => {
    if (score > 85) return "EXCELLENT CONDITION";
    if (score > 70) return "GOOD CONDITION";
    if (score > 50) return "MAINTENANCE RECOMMENDED";
    return "URGENT ATTENTION NEEDED";
  };

  const getStatusBg = () => {
    if (score > 85) return "bg-emerald-50 text-emerald-700 border-emerald-100";
    if (score > 70) return "bg-blue-50 text-[#0066CC] border-blue-100";
    if (score > 50) return "bg-amber-50 text-amber-700 border-amber-100";
    return "bg-rose-50 text-rose-700 border-rose-100";
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white rounded-[3rem] shadow-lg border border-slate-50 group">
      <div className="relative w-40 h-40 flex items-center justify-center mb-6">
        <svg className="w-full h-full -rotate-90">
          <circle cx="80" cy="80" r="72" fill="none" stroke="#f8fafc" strokeWidth="12" />
          <circle
            cx="80"
            cy="80"
            r="72"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray={452.4}
            strokeDashoffset={452.4 - (452.4 * score) / 100}
            className={`${getColor()} transition-all duration-[2500ms] ease-out`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-5xl font-black ${getColor()} tracking-tighter`}>{score}</span>
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">HEALTH SCORE</span>
        </div>
      </div>

      <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border shadow-sm ${getStatusBg()}`}>
        {getStatus()}
      </div>
    </div>
  );
};

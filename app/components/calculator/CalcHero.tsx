import React from 'react';

export const CalcHero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-12 text-center">
      <div className="flex flex-col items-center gap-5 mb-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 backdrop-blur border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0066CC]"></span>
          </span>
          INSTANT PRICING AVAILABLE
        </div>

        <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-amber-500 text-sm">★★★★★</span>
            <span>35+ REVIEWS</span>
          </div>
          <span>•</span>
          <span>500+ HOMES SERVED</span>
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
        Get Your Quote in 60 Seconds
      </h1>

      <p className="text-2xl md:text-3xl text-slate-500 font-semibold max-w-3xl mx-auto mb-12 tracking-tight leading-relaxed">
        Answer a few quick questions and get an instant pricing estimate powered by AI. Based on 500+ homes in Northeast PA.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0066CC] font-black text-2xl">
            ✓
          </div>
          <div className="text-left">
            <div className="text-sm font-black text-slate-900">Free Estimates</div>
            <div className="text-xs text-slate-500">No obligation</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0066CC] font-black text-2xl">
            ⚡
          </div>
          <div className="text-left">
            <div className="text-sm font-black text-slate-900">Instant Results</div>
            <div className="text-xs text-slate-500">Less than a minute</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0066CC] font-black text-2xl">
            🤖
          </div>
          <div className="text-left">
            <div className="text-sm font-black text-slate-900">AI Powered</div>
            <div className="text-xs text-slate-500">Smart analysis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

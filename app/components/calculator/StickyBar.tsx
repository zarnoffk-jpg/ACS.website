'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StickyBarProps {
  name: string;
  isVisible: boolean;
  onSeePrice: () => void;
}

export const StickyBar: React.FC<StickyBarProps> = ({ name, isVisible, onSeePrice }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-slate-900/95 backdrop-blur-md z-50 rounded-2xl border border-white/10 transition-all duration-500 shadow-2xl ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 -translate-y-12 scale-95 pointer-events-none'
      }`}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <p className="text-sm font-bold text-white uppercase tracking-widest">{name}'s Quote</p>
        <button
          onClick={onSeePrice}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-colors active:scale-95"
        >
          See Pricing
        </button>
      </div>
    </div>
  );
};

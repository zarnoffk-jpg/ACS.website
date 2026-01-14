import React from 'react';
import { Package } from '@/types/calculator';

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onClick: () => void;
  homeSize: string;
  zipCode: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, isSelected, onClick, homeSize, zipCode }) => {
  const isRecommended = pkg.recommended;

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-500 rounded-[3rem] border-2 group flex flex-col overflow-hidden ${
        isSelected
          ? 'border-[#0066CC] bg-blue-50/30 shadow-2xl scale-[1.02]'
          : 'border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0066CC]" />
      )}

      <div className="p-10 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-2">{pkg.name}</h3>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">{pkg.tagline}</span>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">${pkg.priceRange[0]}</span>
            <span className="text-slate-300 font-bold ml-1">+</span>
          </div>
        </div>

        <div className="mb-10 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <span className="text-[9px] font-black text-[#0066CC] uppercase tracking-widest block mb-1">Property Value Protection</span>
          <span className="text-sm font-bold text-slate-600">Prevents ${pkg.preservationValue} in structural damage.</span>
        </div>

        <ul className="space-y-4 mb-12 flex-1">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4 text-sm text-slate-600 font-semibold leading-tight">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isSelected ? 'bg-[#0066CC] text-white' : 'bg-slate-100 text-slate-400'}`}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <button className={`w-full py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] transition-all ${
          isSelected
            ? 'bg-[#0066CC] text-white shadow-xl'
            : 'bg-slate-900 text-white hover:bg-black'
        }`}>
          {isSelected ? 'PACKAGE SELECTED' : 'SELECT PACKAGE'}
        </button>
      </div>
    </div>
  );
};

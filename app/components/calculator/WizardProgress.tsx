import React from 'react';

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const WizardProgress: React.FC<WizardProgressProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-16 px-4">
      <div className="flex justify-between items-end mb-4">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Phase Identification</span>
        <span className="text-[10px] font-black text-[#0066CC] tracking-widest">{Math.round(percentage)}% COMPLETE</span>
      </div>
      <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0066CC] transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

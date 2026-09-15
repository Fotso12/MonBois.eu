import React from 'react';

export const VisaLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center justify-center font-black italic tracking-tighter text-blue-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm text-xs ${className}`}>
    VISA
  </span>
);

export const MastercardLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-0.5 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm ${className}`}>
    <span className="w-2.5 h-2.5 bg-red-600 rounded-full inline-block"></span>
    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block -ml-1.5 opacity-90"></span>
    <span className="text-[9px] font-bold text-slate-800 ml-0.5">mastercard</span>
  </span>
);

export const ApplePayLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-1 bg-black text-white px-2 py-0.5 rounded shadow-sm text-[10px] font-semibold ${className}`}>
    <span></span>
    <span>Pay</span>
  </span>
);

export const SGLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-1 bg-slate-950 text-white px-2 py-0.5 rounded text-[10px] font-bold border border-slate-700 shadow-sm ${className}`}>
    <span className="w-2 h-2 bg-red-600 rounded-sm"></span>
    <span>SOCIETE GENERALE</span>
  </span>
);

export const BoursoBankLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-1 bg-pink-600 text-white px-2 py-0.5 rounded text-[10px] font-extrabold shadow-sm ${className}`}>
    <span>BoursoBank</span>
  </span>
);

export const BNPLogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-1 bg-emerald-800 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${className}`}>
    <span className="text-amber-300">★</span>
    <span>BNP PARIBAS</span>
  </span>
);

export const UBALogo: React.FC<{ className?: string }> = ({ className = "h-5" }) => (
  <span className={`inline-flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-black tracking-widest shadow-sm ${className}`}>
    <span>UBA</span>
    <span className="text-[8px] font-semibold opacity-90">CAMEROUN</span>
  </span>
);

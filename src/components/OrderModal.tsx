'use client';

import React, { useState } from 'react';
import { WoodItem } from '@/data/woods';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import {
  X,
  ShoppingCart,
  Building2,
  CreditCard,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Printer,
  ShieldCheck,
  Copy,
  Check,
  Globe2,
  Smartphone,
  HelpCircle
} from 'lucide-react';

interface OrderModalProps {
  wood: WoodItem | null;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ wood, onClose }) => {
  const { language, currency, formatPrice } = useLanguage();
  
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [volume, setVolume] = useState<number>(5);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'EU',
    address: '',
    vat: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'card' | 'proforma'>('bank_transfer');
  const [orderRef, setOrderRef] = useState<string>('');

  if (!wood) return null;
  const t = translations[language].order;

  // Calculate prices
  const unitPrice = currency === 'EUR' ? wood.priceEur : wood.priceUsd;
  const totalPrice = unitPrice * volume;
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  // UBA Cameroon Banking Details
  const ubaBankDetails = {
    bankName: "United Bank for Africa (UBA Cameroun SA)",
    accountHolder: "MonBois.eu Export SARL",
    accountNumber: "10033 00010 01023456789 45",
    swiftCode: "UBAACMCX",
    iban: "CM21 1003 3000 1001 0234 5678 945",
    branch: "Agence Principale Douala Bonanjo / Yaoundé, Cameroun",
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `MB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(randomRef);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-wood-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-wood-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-wood-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-wood-950 flex items-center justify-center font-bold shadow-md">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {t.title}
              </h3>
              <p className="text-xs text-wood-300">
                {wood.name[language]} ({wood.scientificName})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-wood-800 hover:bg-wood-700 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Stepper (Only for steps 1-3) */}
        {step < 4 && (
          <div className="bg-wood-50 px-6 py-3 border-b border-wood-200 flex items-center justify-between text-xs sm:text-sm font-semibold text-wood-700">
            <span className={`flex items-center gap-1.5 ${step === 1 ? 'text-amber-700 font-bold' : ''}`}>
              {t.step1}
            </span>
            <span>&rarr;</span>
            <span className={`flex items-center gap-1.5 ${step === 2 ? 'text-amber-700 font-bold' : ''}`}>
              {t.step2}
            </span>
            <span>&rarr;</span>
            <span className={`flex items-center gap-1.5 ${step === 3 ? 'text-amber-700 font-bold' : ''}`}>
              {t.step3}
            </span>
          </div>
        )}

        {/* Step 1: Volume & Price Calculation */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4 p-4 bg-wood-100/70 rounded-xl border border-wood-200">
              <img
                src={wood.image}
                alt={wood.name[language]}
                className="w-20 h-20 rounded-lg object-cover border border-wood-300 shadow-sm"
              />
              <div className="flex-1">
                <h4 className="text-lg font-bold font-serif text-wood-950">{wood.name[language]}</h4>
                <p className="text-xs text-wood-600">{wood.categoryLabel[language]} | {wood.origin[language]}</p>
                <p className="text-sm font-semibold text-wood-800 mt-1">
                  {t.unitPrice}: <span className="text-amber-700 font-bold">{formatPrice(wood.priceEur, wood.priceUsd)}</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-wood-900">
                {t.volumeLabel}
              </label>
              
              {/* Quick volume selector buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 5, 10, 25].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVolume(v)}
                    className={`py-2.5 rounded-lg text-xs sm:text-sm font-bold border transition-all ${
                      volume === v
                        ? 'bg-wood-800 text-amber-300 border-wood-800 shadow-sm'
                        : 'bg-white text-wood-800 border-stone-300 hover:bg-wood-50'
                    }`}
                  >
                    {v} m³
                  </button>
                ))}
              </div>

              {/* Slider for custom volume */}
              <div className="pt-2">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value) || 1)}
                  className="w-full accent-wood-700 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-wood-500 font-semibold mt-1">
                  <span>1 m³</span>
                  <span>50 m³</span>
                  <span>100 m³</span>
                </div>
              </div>
            </div>

            {/* Total summary box */}
            <div className="bg-wood-950 text-white rounded-xl p-5 flex items-center justify-between shadow-lg">
              <div>
                <span className="block text-xs font-semibold text-amber-300 uppercase tracking-wider">{t.totalPrice}</span>
                <span className="text-xs text-wood-300">{volume} m³ &times; {unitPrice.toLocaleString()} {currencySymbol}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {totalPrice.toLocaleString()} {currencySymbol}
              </span>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold rounded-xl flex items-center gap-2 text-sm shadow-md transition-all"
              >
                <span>{t.nextStep}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Shipping & Customer Details */}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">Nom complet / Raison Sociale *</label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  placeholder="Jean Dupont / Timber SARL"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">Email de confirmation *</label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  placeholder="contact@entreprise.com"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">Téléphone de contact *</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  placeholder="+33 6 12 34 56 78 / +1 617..."
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">{t.shippingCountry} *</label>
                <select
                  value={customerInfo.country}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
                >
                  <option value="EU">Union Européenne (France, Allemagne, Belgique, Italie...)</option>
                  <option value="US">Amérique du Nord (USA / Canada)</option>
                  <option value="AFRICA">Afrique / Cameroun</option>
                  <option value="OTHER">Autre Destination Internationale</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">{t.shippingAddress} *</label>
              <textarea
                rows={2}
                required
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                placeholder="Rue, Code Postal, Ville, Pays..."
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-wood-700 uppercase mb-1">{t.vatNumber}</label>
              <input
                type="text"
                value={customerInfo.vat}
                onChange={(e) => setCustomerInfo({ ...customerInfo, vat: e.target.value })}
                placeholder="FR12345678901 / NIF Cameroun..."
                className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-wood-600 focus:outline-none"
              />
            </div>

            <div className="flex justify-between pt-4 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-900 font-semibold rounded-xl text-sm flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold rounded-xl text-sm flex items-center gap-1.5 shadow-md"
              >
                <span>{t.nextStep}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Payment Method Selection */}
        {step === 3 && (
          <form onSubmit={handleConfirmOrder} className="p-6 sm:p-8 space-y-6">
            <h4 className="text-base font-bold font-serif text-wood-950 border-b border-wood-200 pb-2">
              {t.paymentMethodTitle}
            </h4>

            <div className="space-y-3">
              
              {/* Option 1: UBA Cameroon Bank Transfer with Bank Badges */}
              <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === 'bank_transfer'
                  ? 'border-wood-800 bg-wood-50 shadow-md'
                  : 'border-stone-200 bg-white hover:border-wood-400'
              }`}>
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={() => setPaymentMethod('bank_transfer')}
                    className="mt-1 accent-wood-800"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-wood-950 text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-wood-700" />
                        {t.payBankTransfer}
                      </span>
                      <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase">Recommandé</span>
                    </div>
                    
                    <p className="text-xs text-wood-600">{t.bankTransferDesc}</p>
                    
                    {/* Bank partner pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 bg-red-100 text-red-900 text-[10px] font-bold rounded border border-red-200">Société Générale (SG)</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[10px] font-bold rounded border border-blue-200">BoursoBank</span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 text-[10px] font-bold rounded border border-emerald-200">BNP Paribas</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-900 text-[10px] font-bold rounded border border-green-200">Crédit Agricole</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[10px] font-bold rounded border border-amber-200">&rarr; UBA Cameroun</span>
                    </div>
                  </div>
                </div>
              </label>

              {/* Option 2: Card payment simulation */}
              <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-wood-800 bg-wood-50 shadow-md'
                  : 'border-stone-200 bg-white hover:border-wood-400'
              }`}>
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="mt-1 accent-wood-800"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-wood-950 text-sm flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-wood-700" />
                      {t.payCard}
                    </span>
                    <p className="text-xs text-wood-600 mt-1">{t.cardDesc}</p>
                  </div>
                </div>
              </label>

              {/* Option 3: Official Proforma Invoice */}
              <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === 'proforma'
                  ? 'border-wood-800 bg-wood-50 shadow-md'
                  : 'border-stone-200 bg-white hover:border-wood-400'
              }`}>
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="proforma"
                    checked={paymentMethod === 'proforma'}
                    onChange={() => setPaymentMethod('proforma')}
                    className="mt-1 accent-wood-800"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-wood-950 text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-wood-700" />
                      {t.payProforma}
                    </span>
                    <p className="text-xs text-wood-600 mt-1">{t.proformaDesc}</p>
                  </div>
                </div>
              </label>

            </div>

            {/* Total Recap */}
            <div className="p-4 bg-stone-100 rounded-xl flex items-center justify-between text-sm font-bold text-wood-950">
              <span>Montant Total à régler ({volume} m³) :</span>
              <span className="text-xl text-amber-800">{totalPrice.toLocaleString()} {currencySymbol}</span>
            </div>

            <div className="flex justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-900 font-semibold rounded-xl text-sm flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </button>
              <button
                type="submit"
                className="px-7 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow-lg flex items-center gap-2 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>{t.confirmOrder}</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Order Receipt, Bank Transfer Tutorial & UBA Cameroon Details */}
        {step === 4 && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Success Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold font-serif text-emerald-950">{t.orderSuccessTitle}</h4>
              <p className="text-sm text-emerald-800">
                {t.orderSuccessDesc} <strong className="text-wood-950 bg-emerald-200/70 px-2.5 py-1 rounded-md text-base">{orderRef}</strong>
              </p>
              <p className="text-xs text-emerald-700">{t.orderSuccessSub}</p>
            </div>

            {/* Order Summary Recap */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-stone-700">Client :</span>
                <span className="text-stone-900">{customerInfo.name || 'Client MonBois'} ({customerInfo.email})</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="font-bold text-stone-700">Bois commandé :</span>
                <span className="text-stone-900">{wood.name[language]} ({volume} m³)</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-wood-950 pt-1">
                <span>Montant Total :</span>
                <span className="text-emerald-700">{totalPrice.toLocaleString()} {currencySymbol}</span>
              </div>
            </div>

            {/* Visual Guide: How to send money from European banks (SG, BoursoBank, etc.) to UBA Cameroon */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 space-y-3 text-xs">
              <h5 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-blue-700" />
                {t.bankGuideTitle}
              </h5>
              <p className="text-blue-800">{t.bankGuideSubtitle}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 bg-white rounded-lg border border-blue-100 flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                  <span>{t.guideStep1}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-blue-100 flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                  <span>{t.guideStep2}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-blue-100 flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                  <span>{t.guideStep3}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-blue-100 flex items-start gap-2">
                  <span className="w-5 h-5 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">4</span>
                  <span>{t.guideStep4}</span>
                </div>
              </div>
            </div>

            {/* Official UBA Cameroon Bank Details Box */}
            <div className="bg-wood-950 text-white rounded-2xl p-6 shadow-xl border border-wood-800 space-y-4">
              <div className="flex items-center justify-between border-b border-wood-800 pb-3">
                <h4 className="text-base font-bold font-serif text-amber-300 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  {t.bankDetailsTitle}
                </h4>
                <span className="px-2.5 py-1 bg-amber-400 text-wood-950 text-[10px] font-extrabold rounded-md uppercase">Compte Officiel UBA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-3 bg-wood-900/80 rounded-xl border border-wood-800">
                  <span className="block text-[10px] font-bold text-amber-400 uppercase">{t.bankName}</span>
                  <span className="font-semibold text-white text-sm">{ubaBankDetails.bankName}</span>
                </div>

                <div className="p-3 bg-wood-900/80 rounded-xl border border-wood-800">
                  <span className="block text-[10px] font-bold text-amber-400 uppercase">{t.bankAccountHolder}</span>
                  <span className="font-semibold text-white text-sm">{ubaBankDetails.accountHolder}</span>
                </div>

                <div className="p-3 bg-wood-900/80 rounded-xl border border-wood-800 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-bold text-amber-400 uppercase">{t.accountNumber}</span>
                    <span className="font-mono text-white text-xs sm:text-sm">{ubaBankDetails.accountNumber}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ubaBankDetails.accountNumber, 'acc')}
                    className="p-1.5 bg-wood-800 hover:bg-wood-700 text-amber-300 rounded-md transition-colors"
                    title="Copier le numéro de compte"
                  >
                    {copiedField === 'acc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 bg-wood-900/80 rounded-xl border border-wood-800 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-bold text-amber-400 uppercase">{t.swiftBic}</span>
                    <span className="font-mono text-white text-xs sm:text-sm">{ubaBankDetails.swiftCode}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ubaBankDetails.swiftCode, 'swift')}
                    className="p-1.5 bg-wood-800 hover:bg-wood-700 text-amber-300 rounded-md transition-colors"
                    title="Copier le code SWIFT"
                  >
                    {copiedField === 'swift' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="sm:col-span-2 p-3 bg-wood-900/80 rounded-xl border border-wood-800 flex justify-between items-center">
                  <div>
                    <span className="block text-[10px] font-bold text-amber-400 uppercase">{t.iban}</span>
                    <span className="font-mono text-white text-xs sm:text-sm tracking-wide">{ubaBankDetails.iban}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ubaBankDetails.iban, 'iban')}
                    className="p-1.5 bg-wood-800 hover:bg-wood-700 text-amber-300 rounded-md transition-colors"
                    title="Copier le RIB / IBAN"
                  >
                    {copiedField === 'iban' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  <strong>{t.transferReferenceNote}</strong> Motif de virement : <span className="underline font-bold text-white">{orderRef}</span> - {customerInfo.name || 'Commande MonBois'}.
                </p>
              </div>
            </div>

            {/* Actions: Print and Close */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-sm rounded-xl border border-stone-300 flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-wood-700" />
                <span>{t.printReceipt}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-7 py-2.5 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold text-sm rounded-xl shadow-md"
              >
                {t.closeOrder}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

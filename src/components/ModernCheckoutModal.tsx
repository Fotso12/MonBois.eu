'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  VisaLogo,
  MastercardLogo,
  ApplePayLogo,
  SGLogo,
  BoursoBankLogo,
  BNPLogo,
  UBALogo
} from './PaymentLogos';
import {
  X,
  Lock,
  CreditCard,
  Building2,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface ModernCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModernCheckoutModal: React.FC<ModernCheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, totalPriceEur, totalPriceUsd, clearCart } = useCart();
  const { language, currency } = useLanguage();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>('card');
  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const [orderRef, setOrderRef] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'France',
    address: '',
    cardNumber: '4532 •••• •••• 8892',
    cardExp: '12/28',
    cardCvc: '•••',
  });

  if (!isOpen) return null;

  const totalPrice = currency === 'EUR' ? totalPriceEur : totalPriceUsd;
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  // Bank details UBA Cameroon
  const ubaDetails = {
    accountHolder: "MonBois.eu Export SARL",
    bankName: "United Bank for Africa (UBA Cameroun)",
    swift: "UBAACMCX",
    iban: "CM21 1003 3000 1001 0234 5678 945",
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `MB-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderRef(ref);
    setStep('success');
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-sm tracking-wide">Paiement Sécurisé SSL MonBois.eu</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'checkout' ? (
          <form onSubmit={handlePay} className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Customer & Shipping (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              
              <div>
                <h3 className="text-lg font-bold font-serif text-slate-900 mb-1">
                  1. Informations de Livraison
                </h3>
                <p className="text-xs text-slate-500">
                  Renseignez vos coordonnées pour l&apos;établissement du bon d&apos;expédition.
                </p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nom Complet *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-wood-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Adresse Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jean.dupont@exemple.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-wood-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-wood-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Pays de Destination *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-wood-800 focus:outline-none"
                    >
                      <option value="France">France 🇫🇷</option>
                      <option value="Belgique">Belgique 🇧🇪</option>
                      <option value="Suisse">Suisse 🇨🇭</option>
                      <option value="Allemagne">Allemagne 🇩🇪</option>
                      <option value="USA">États-Unis 🇺🇸</option>
                      <option value="Canada">Canada 🇨🇦</option>
                      <option value="Cameroun">Cameroun 🇨🇲</option>
                      <option value="Autre">Autre International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Adresse complète de livraison *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="15 Rue de l'Industrie, 75001 Paris"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-wood-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Order Recap list */}
              <div className="pt-2">
                <span className="block text-xs font-bold text-slate-800 mb-2">Contenu du Panier :</span>
                <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.wood.id} className="flex justify-between text-xs text-slate-600 bg-slate-100 p-2 rounded">
                      <span className="font-semibold text-slate-900">{item.wood.name[language]}</span>
                      <span>{item.volume} m³ &times; {(currency === 'EUR' ? item.wood.priceEur : item.wood.priceUsd).toLocaleString()} {currencySymbol}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Payment Method Selection & Checkout (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50 space-y-5 flex flex-col justify-between">
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-200 pb-2">
                  2. Mode de Paiement
                </h3>

                {/* Option A: Credit Card */}
                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-wood-800 bg-white shadow-md'
                      : 'border-slate-200 bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pay_method"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-wood-800"
                      />
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">Carte Bancaire</span>
                    </div>
                    <div className="flex gap-1">
                      <VisaLogo />
                      <MastercardLogo />
                      <ApplePayLogo />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 pl-6">
                    Paiement instantané simulé par Carte Bleue, Visa, Mastercard ou Apple Pay.
                  </p>
                </label>

                {/* Option B: Bank Transfer (UBA Cameroon) */}
                <label
                  onClick={() => setPaymentMethod('bank_transfer')}
                  className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'bank_transfer'
                      ? 'border-wood-800 bg-white shadow-md'
                      : 'border-slate-200 bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pay_method"
                        checked={paymentMethod === 'bank_transfer'}
                        onChange={() => setPaymentMethod('bank_transfer')}
                        className="accent-wood-800"
                      />
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">Virement Bancaire SWIFT / SEPA</span>
                    </div>
                    <UBALogo />
                  </div>
                  
                  <div className="flex flex-wrap gap-1 pl-6 pt-1">
                    <SGLogo />
                    <BoursoBankLogo />
                    <BNPLogo />
                  </div>
                  
                  <p className="text-[11px] text-slate-500 pl-6 mt-1.5">
                    Virement depuis votre application bancaire (SG, BoursoBank, BNP...) vers notre compte UBA Cameroun.
                  </p>
                </label>

                {/* Details view depending on choice */}
                {paymentMethod === 'card' ? (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2.5 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Numéro de carte simulé</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-mono text-slate-800"
                        />
                        <CreditCard className="w-4 h-4 text-slate-400 absolute right-2.5 top-2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">Exp.</label>
                        <input
                          type="text"
                          value={formData.cardExp}
                          onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-mono text-slate-800 text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-0.5">CVC</label>
                        <input
                          type="text"
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          className="w-full px-3 py-1.5 bg-slate-50 border border-slate-300 rounded text-xs font-mono text-slate-800 text-center"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl space-y-2 text-xs animate-in fade-in duration-200">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <span className="font-bold text-amber-300 text-[11px]">Bénéficiaire UBA Cameroun :</span>
                      <UBALogo />
                    </div>
                    
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">Titulaire :</span>
                      <strong className="text-white">{ubaDetails.accountHolder}</strong>
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">SWIFT / BIC :</span>
                      <span className="font-mono text-amber-300 font-bold">{ubaDetails.swift}</span>
                    </div>

                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">IBAN / RIB :</span>
                      <span className="font-mono text-white text-[10px] truncate max-w-[150px]">{ubaDetails.iban}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Order total & CTA */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-sm font-bold text-slate-900">
                  <span>Montant Total :</span>
                  <span className="text-2xl text-emerald-800 font-extrabold">
                    {totalPrice.toLocaleString()} {currencySymbol}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  <span>Payer et Valider la Commande</span>
                </button>
              </div>

            </div>

          </form>
        ) : (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-serif text-slate-900 mb-1">
                Commande Validée avec Succès !
              </h3>
              <p className="text-xs text-slate-500">
                Référence de commande : <strong className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-sm">{orderRef}</strong>
              </p>
            </div>

            {paymentMethod === 'bank_transfer' ? (
              <div className="p-5 bg-slate-900 text-white rounded-2xl text-left space-y-3 text-xs shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-amber-300">Coordonnées Virement UBA Cameroun</span>
                  <UBALogo />
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <p><strong className="text-slate-400">Titulaire :</strong> {ubaDetails.accountHolder}</p>
                  <p><strong className="text-slate-400">Code SWIFT :</strong> <span className="font-mono text-amber-300 font-bold">{ubaDetails.swift}</span></p>
                  <p><strong className="text-slate-400">IBAN International :</strong> <span className="font-mono text-white">{ubaDetails.iban}</span></p>
                  <p className="text-amber-200 pt-1 text-[10px]">
                    &bull; Pensez à indiquer la référence <strong>{orderRef}</strong> dans le motif de votre virement depuis votre application bancaire (SG, BoursoBank, etc.).
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-xs">
                Votre paiement par Carte Bancaire de <strong>{totalPrice.toLocaleString()} {currencySymbol}</strong> a été simulé et accepté. Votre commande est en cours de préparation logistique.
              </div>
            )}

            <div className="flex justify-center gap-3 pt-4">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Imprimer le reçu</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold text-xs rounded-xl shadow-md"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

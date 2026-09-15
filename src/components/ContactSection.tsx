'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { woodCatalog } from '@/data/woods';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  selectedWoodForQuote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedWoodForQuote = '' }) => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    region: 'EU',
    wood: selectedWoodForQuote,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        region: 'EU',
        wood: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-wood-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-wood-950">
            {t.title}
          </h2>
          <p className="text-wood-600 text-base sm:text-lg mt-3">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-wood-200 shadow-lg">
            <h3 className="text-xl font-bold font-serif text-wood-950 mb-6">
              {t.formTitle}
            </h3>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Merci !</h4>
                <p className="text-sm text-emerald-800">{t.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-wood-700 uppercase mb-2">
                      {t.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood-600 text-wood-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-wood-700 uppercase mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood-600 text-wood-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-wood-700 uppercase mb-2">
                      {t.region}
                    </label>
                    <select
                      value={formState.region}
                      onChange={(e) => setFormState({ ...formState, region: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood-600 text-wood-900"
                    >
                      <option value="EU">{t.regionEU}</option>
                      <option value="US">{t.regionUS}</option>
                      <option value="OTHER">{t.regionOther}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-wood-700 uppercase mb-2">
                      {t.woodOfInterest}
                    </label>
                    <select
                      value={formState.wood}
                      onChange={(e) => setFormState({ ...formState, wood: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood-600 text-wood-900"
                    >
                      <option value="">{t.woodSelectDefault}</option>
                      {woodCatalog.map((item) => (
                        <option key={item.id} value={item.name[language]}>
                          {item.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-wood-700 uppercase mb-2">
                    {t.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wood-600 text-wood-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{t.sendBtn}</span>
                </button>

              </form>
            )}
          </div>

          {/* Direct Info Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-wood-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
              <h3 className="text-xl font-bold font-serif text-amber-300 border-b border-wood-800 pb-3">
                {t.directInfoTitle}
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:contact@monbois.eu"
                  className="flex items-start gap-4 p-3 rounded-lg bg-wood-800/60 hover:bg-wood-800 transition-colors"
                >
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-wood-300">{t.emailDirect}</span>
                    <span className="font-bold text-white">contact@monbois.eu</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-wood-800/60">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-wood-300">{t.phoneDirect}</span>
                    <span className="font-bold text-white">+33 (0)1 42 68 55 00 / +1 (617) 555-0199</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-wood-800/60">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <div>
                      <span className="block text-xs font-semibold text-amber-400">{t.locationEU}</span>
                      <span className="text-wood-100">{t.addressEU}</span>
                    </div>
                    <div className="pt-1 border-t border-wood-700/50">
                      <span className="block text-xs font-semibold text-amber-400">{t.locationUS}</span>
                      <span className="text-wood-100">{t.addressUS}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-lg bg-wood-800/60">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-wood-300">{t.hours}</span>
                    <span className="text-wood-100">{t.hoursValue}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, User, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { schoolInfo } from '../data/schoolInfo';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Aloqa</span>
        </div>
        <SectionHeader
          badge="Rasmiy aloqa kanallari"
          title="Maktab bilan bog‘lanish"
          subtitle="Savollaringiz, takliflaringiz yoki 1-sinfga qabul bo‘yicha maktab ma’muriyatiga bevosita murojaat qiling."
        />
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Official Contact Directory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-5 text-xs">
            <h3 className="text-base sm:text-lg font-extrabold text-primary border-b border-slate-100 pb-3">
              Rasmiy rekvizitlar
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-mainText text-sm block">Pochta manzili:</span>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  {schoolInfo.address[language]}
                </p>
                <span className="text-[11px] text-mutedText block mt-1">
                  Mo‘ljal: Namangan shahar markaziy ta’lim hududi
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-mainText text-sm block">Rasmiy telefon:</span>
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="text-secondary font-bold text-sm hover:underline block mt-0.5"
                >
                  {schoolInfo.phoneFormatted}
                </a>
                <span className="text-[11px] text-mutedText block mt-1">
                  Qabulxona va devonxona
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-mainText text-sm block">Rasmiy elektron pochta:</span>
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="text-slate-700 hover:text-secondary underline font-mono block mt-0.5 break-all"
                >
                  {schoolInfo.email}
                </a>
                <span className="text-[11px] text-mutedText block mt-1">
                  Rasmiy yozishmalar uchun
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-mainText text-sm block">Ish tartibi va qabul:</span>
                <p className="text-slate-700 font-medium mt-0.5">
                  {schoolInfo.workingHours[language]}
                </p>
                <p className="text-[11px] text-mutedText mt-1">
                  Direktor qabul vaqti: {schoolInfo.principal.receptionHours[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Legal Protection Notice */}
          <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 text-xs text-primary leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Fuqarolar murojaatlari to‘g‘risida:</span> Barcha tushgan arizalar belgilangan muddatda maktab rahbariyati tomonidan ko‘rib chiqiladi va javob xati yo‘llanadi.
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div className="mb-6 space-y-1">
            <h3 className="text-lg sm:text-xl font-extrabold text-primary">
              Maktab ma’muriyatiga murojaat yo‘llash
            </h3>
            <p className="text-xs text-mutedText leading-relaxed">
              Quyidagi shaklni to‘ldiring. Elektron pochta kiritish majburiy emas, aloqa uchun telefon raqamingizni aniq ko‘rsatishingiz yetarli.
            </p>
          </div>

          <ContactForm />
        </div>

      </div>

      {/* Map & Location Section */}
      <section className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <Navigation className="w-5 h-5 text-secondary" />
            <h3 className="font-extrabold text-primary text-base">
              Xaritada joylashuv
            </h3>
          </div>
          <span className="text-xs text-mutedText">
            Namangan shahri, Namangan viloyati
          </span>
        </div>

        {/* Visual Map Frame */}
        <div className="w-full h-72 sm:h-96 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-md space-y-3 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200">
            <div className="w-12 h-12 bg-primary text-accent rounded-full flex items-center justify-center mx-auto font-extrabold text-sm">
              36
            </div>
            <h4 className="font-bold text-mainText text-sm sm:text-base">
              Namangan shahar 36-sonli umumta’lim maktabi
            </h4>
            <p className="text-xs text-mutedText leading-snug">
              {schoolInfo.address[language]}
            </p>
            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=Namangan+city+school+36`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-xs"
              >
                <span>Xaritada ochish (Google Maps)</span>
                <Navigation className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

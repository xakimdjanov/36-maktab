import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Users, 
  ExternalLink, 
  Phone, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { bellSchedule, academicQuarters, parentsResources } from '../data/parentsData';
import { schoolInfo } from '../data/schoolInfo';

export const ParentsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Title & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Ota-onalar uchun</span>
        </div>
        <SectionHeader
          badge="Oila va maktab hamkorligi"
          title="Ota-onalar uchun muhim ma’lumotlar"
          subtitle="Farzandingizning sifatli ta’lim olishi, intizomi va maktab hayotiga moslashuvi uchun zarur barcha qo‘llanmalar."
        />
      </div>

      {/* Online Services Portal Links (eMaktab / Kundalik) */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-accent">
              Raqamli ta’lim xizmatlari
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              eMaktab (Kundalik) elektron baholash tizimi
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
              O‘quvchining darsdagi baholari, uyga vazifalari va davomatini bevosita onlayn kuzatib boring.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://emaktab.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm active:scale-95"
            >
              <span>eMaktab tizimiga kirish</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bell Schedule & Academic Calendar */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Bell Schedule Table */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/5 text-primary">
              <Clock className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-extrabold text-primary text-base sm:text-lg">
                Dars va qo‘ng‘iroqlar jadvali
              </h3>
              <p className="text-xs text-mutedText">Kunduzgi smena tartibi</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                  <th className="py-2.5 px-3">Dars</th>
                  <th className="py-2.5 px-3">Vaqt</th>
                  <th className="py-2.5 px-3">Tanaffus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bellSchedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold text-primary">{row.period}</td>
                    <td className="py-2.5 px-3 font-extrabold text-slate-800">{row.time}</td>
                    <td className="py-2.5 px-3 text-mutedText text-[11px] font-semibold">{row.recess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Calendar Quarters */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/5 text-primary">
              <Calendar className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-extrabold text-primary text-base sm:text-lg">
                O‘quv choraklari va ta’tillar
              </h3>
              <p className="text-xs text-mutedText">Rasmiy ta’lim taqvimi</p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {academicQuarters.map((q, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
                <div className="flex items-center justify-between font-bold text-primary">
                  <span>{q.quarter}</span>
                  <span className="text-[11px] font-mono text-secondary">{q.dates}</span>
                </div>
                <div className="text-[11px] text-mutedText">
                  Ta’til: <span className="text-slate-700 font-medium">{q.vacation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Admission Checklist & Uniform Rules */}
      <section className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-primary">
          Qabul me’yorlari va maktab talablari
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parentsResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div>
                <h4 className="font-extrabold text-mainText text-base leading-snug">
                  {res.title[language]}
                </h4>
                <p className="text-xs text-mutedText leading-relaxed mt-2 mb-4">
                  {res.description[language]}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  {res.details[language].map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[10px] text-mutedText">
                Tasdiqlangan maktab nizomi asosida
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principal Reception Quick Reminder */}
      <section className="p-6 sm:p-8 bg-amber-50/60 rounded-3xl border border-amber-200/70 text-xs text-amber-950 space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700" />
          <span>Ota-onalar diqqatiga:</span>
        </div>
        <p className="leading-relaxed">
          Farzandingizning dars jarayoni, to‘garaklarga yozilishi yoki boshqa savollar yuzasidan sinf rahbari bilan bir qatorda, maktab direktori qabul kunlarida bevosita muloqot qilishingiz mumkin.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-1 font-semibold text-primary">
          <span>Direktor qabul kunlari: {schoolInfo.principal.receptionHours[language]}</span>
          <span>•</span>
          <a href={`tel:${schoolInfo.phone}`} className="hover:underline flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            <span>{schoolInfo.phoneFormatted}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

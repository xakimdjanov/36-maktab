import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Award, 
  Users, 
  Calendar,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { schoolInfo } from '../data/schoolInfo';
import { leadershipData, LeadershipMember } from '../data/leadershipData';

export const DirectorPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const principal = leadershipData.find((m) => m.id === 'principal') || leadershipData[0];
  const deputies = leadershipData.filter((m) => m.category === 'deputy');
  const psychologist = leadershipData.find((m) => m.category === 'psychologist');
  const advisors = leadershipData.filter((m) => m.category === 'advisor');

  const teamList = leadershipData.filter((m) => m.id !== 'principal');

  const filteredTeam = selectedCategory === 'all'
    ? teamList
    : teamList.filter((m) => m.category === selectedCategory);

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Maktab direktori</span>
        </div>
        <SectionHeader
          badge="Boshqaruv va rahbarlik"
          title="Maktab direktori"
          subtitle="Namangan shahar 36-sonli umumta’lim maktabi boshqaruvi, direktori va ma’muriy jamoasi."
        />
      </div>

      {/* ========================================================
          PRINCIPAL SPOTLIGHT (JALILOV AXADJON XOLIKOVICH)
          ======================================================== */}
      <section className="bg-white rounded-3xl p-6 sm:p-12 border border-black/[0.06] shadow-apple">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Avatar / Official Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-black/[0.04] space-y-4">
            <div className="relative">
              <img
                src="/logo.png"
                alt={principal.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-contain p-2 bg-white shadow-apple border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1 right-1 p-2 bg-emerald-500 text-white rounded-full shadow-apple-sm">
                <CheckCircle2 className="w-5 h-5" />
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-full">
                {principal.role[language]}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F] pt-1">
                {principal.name}
              </h2>
              <p className="text-xs text-[#86868B]">
                Namangan shahar 36-sonli maktab rahbari
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="w-full pt-4 border-t border-slate-200/80 space-y-2 text-xs text-left">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="font-semibold hover:underline">
                  {schoolInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="font-mono text-[11px] hover:underline truncate">
                  {schoolInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-700 pt-1">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Qabul vaqti:</span>
                  <div className="text-[11px] text-[#86868B]">{principal.receptionDays[language]}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message, Bio & Core Duties */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Direktor rasmiy nutqi
              </span>
              <blockquote className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] leading-tight">
                «Maktabimizning bosh maqsadi — har bir o‘quvchiga zamonaviy bilim berish va ularni mustaqil hayotga munosib tayyorlashdir.»
              </blockquote>
              <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed">
                {principal.bio[language]}
              </p>
            </div>

            {/* Principal Duties Checklist */}
            <div className="space-y-2 pt-2 border-t border-black/[0.04]">
              <h4 className="font-extrabold text-sm text-[#1D1D1F]">
                Asosiy rahbarlik vazifalari:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {principal.duties[language].map((duty, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-2xl">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{duty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/#aloqa"
                className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-full hover:bg-primary-dark transition-colors shadow-apple-sm"
              >
                Direktor qabuliga yozilish
              </Link>
              <Link
                to="/about"
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-primary font-bold text-xs rounded-full transition-colors"
              >
                Maktab haqida tanishish
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          ADMINISTRATION TEAM (ZAM DIREKTOR, PSIXOLOG, MASLAHATCHILAR)
          ======================================================== */}
      <section className="space-y-8 pt-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Boshqaruv tarkibi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Direktor o‘rinbosarlari, psixolog va maslahatchilar
          </h2>
          <p className="text-xs sm:text-sm text-[#86868B]">
            Maktabda o‘quv, ma’naviy-ma’rifiy, moddiy-texnik jarayonlarni boshqaruvchi hamda o‘quvchilar salomatligi va tashabbuslarini qo‘llab-quvvatlovchi mutaxassislar tarkibi.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 mx-auto">
          {[
            { id: 'all', label: `Barchasi (${teamList.length})` },
            { id: 'deputy', label: `Zam direktorlar (${deputies.length})` },
            { id: 'psychologist', label: 'Maktab psixologi' },
            { id: 'advisor', label: `Direktor maslahatchilari (${advisors.length})` },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white border-primary shadow-apple-sm'
                  : 'bg-white text-primary border-black/[0.08] hover:border-primary/40 hover:bg-black/[0.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.06] shadow-apple-sm hover:shadow-apple transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                    {member.badge?.[language]}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">
                    Tasdiqlangan
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white font-extrabold flex items-center justify-center text-xs shadow-apple-sm shrink-0">
                    {member.avatarPlaceholderText}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1D1D1F] text-base leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-secondary mt-0.5">
                      {member.role[language]}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#86868B] leading-relaxed mt-3 pt-3 border-t border-black/[0.04]">
                  {member.bio[language]}
                </p>

                {/* Duties */}
                <div className="mt-4 pt-3 border-t border-black/[0.04] space-y-1.5 text-[11px] text-slate-700">
                  <span className="font-bold text-[#1D1D1F] block text-xs mb-1">Mas’uliyat sohalari:</span>
                  {member.duties[language].map((duty, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5"></span>
                      <span>{duty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reception Hours */}
              <div className="mt-5 pt-3 border-t border-black/[0.04] flex items-center gap-2 text-xs text-[#86868B]">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-[11px]">
                  Qabul: {member.receptionDays[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

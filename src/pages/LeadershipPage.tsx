import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { leadershipData } from '../data/leadershipData';
import { schoolInfo } from '../data/schoolInfo';

export const LeadershipPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <Link to="/about" className="hover:text-primary transition-colors">Maktab haqida</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Rahbariyat</span>
        </div>
        <SectionHeader
          badge="Ma’muriy boshqaruv"
          title="Maktab rahbariyati"
          subtitle="Namangan shahar 36-sonli umumta’lim maktabining boshqaruv tarkibi va qabul vaqtlari."
        />
      </div>

      {/* Leadership Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leadershipData.map((member) => (
          <div
            key={member.id}
            className={`bg-white rounded-3xl border p-6 sm:p-8 shadow-sm flex flex-col justify-between transition-all ${
              member.isConfirmed ? 'border-primary/30 ring-1 ring-primary/10' : 'border-slate-200/80'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  {member.avatarPlaceholderText}
                </div>

                {member.isConfirmed ? (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{member.badge?.[language] || 'Tasdiqlangan'}</span>
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1.5 border border-slate-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Rasmiy ma’lumot kutilmoqda</span>
                  </span>
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-primary leading-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-secondary mt-1">
                {member.role[language]}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100">
                {member.bio[language]}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800">Fuqarolarni qabul qilish vaqti:</span>
                  <div className="text-slate-600 mt-0.5">{member.receptionDays[language]}</div>
                </div>
              </div>

              {member.phone && (
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <a href={`tel:${member.phone}`} className="hover:text-primary font-medium">
                    {member.phone}
                  </a>
                </div>
              )}

              {member.email && (
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <a href={`mailto:${member.email}`} className="hover:text-primary font-mono text-[11px]">
                    {member.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

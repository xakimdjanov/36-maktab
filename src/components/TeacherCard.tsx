import React from 'react';
import { Award, BookOpen, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Teacher } from '../data/teachersData';
import { useLanguage } from '../context/LanguageContext';

interface TeacherCardProps {
  teacher: Teacher;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top bar: department badge and verification status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20">
            {teacher.department.toUpperCase()}
          </span>

          {teacher.isConfirmed ? (
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Tasdiqlangan</span>
            </span>
          ) : (
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1" title="Tafsilotlar rasmiy tasdiqlanish arafasida">
              <AlertCircle className="w-3 h-3 text-slate-400" />
              <span>Namuna profil</span>
            </span>
          )}
        </div>

        {/* Teacher Avatar and Info */}
        <div className="flex items-start gap-3.5 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base tracking-wider shrink-0 shadow-xs ${teacher.avatarColor}`}>
            {teacher.initials}
          </div>
          <div className="min-w-0">
            <h3 className="font-extrabold text-mainText text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
              {teacher.name}
            </h3>
            <p className="text-xs font-semibold text-secondary mt-0.5">
              {teacher.subject[language]}
            </p>
          </div>
        </div>

        {/* Qualification & Experience */}
        <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-start gap-2 text-slate-700">
            <Award className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <span className="font-medium text-[11px] sm:text-xs">
              {teacher.qualificationCategory[language]}
            </span>
          </div>

          <div className="flex items-start gap-2 text-slate-600">
            <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="text-[11px] line-clamp-2">
              {teacher.education[language]}
            </span>
          </div>

          {teacher.experienceYears && (
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-[11px]">
                Pedagogik tajriba: {teacher.experienceYears} yil
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Special Note / Achievements */}
      {teacher.specialNote ? (
        <div className="mt-4 p-2.5 bg-secondary/5 rounded-xl border border-secondary/10 text-[11px] text-secondary-dark italic leading-snug">
          "{teacher.specialNote[language]}"
        </div>
      ) : teacher.achievements ? (
        <div className="mt-4 text-[11px] text-mutedText border-t border-slate-100 pt-2 line-clamp-2">
          {teacher.achievements[language]}
        </div>
      ) : null}
    </div>
  );
};

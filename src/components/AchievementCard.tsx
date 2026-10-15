import React from 'react';
import { Award, GraduationCap, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { Achievement } from '../data/achievementsData';
import { useLanguage } from '../context/LanguageContext';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { language } = useLanguage();

  const badgeColorMap = {
    gold: 'bg-amber-100 text-amber-900 border-amber-300',
    silver: 'bg-slate-100 text-slate-800 border-slate-300',
    blue: 'bg-blue-100 text-blue-900 border-blue-300',
    green: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Header: Category and Year */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-mutedText font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{achievement.year}-yil</span>
          </div>

          {achievement.scoreOrAward && (
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColorMap[achievement.badgeType]}`}
            >
              {achievement.scoreOrAward}
            </span>
          )}
        </div>

        {/* Institution / Award Title */}
        <div className="flex items-start gap-2.5 mb-2">
          <div className="p-2 rounded-xl bg-primary/5 text-primary shrink-0 mt-0.5">
            {achievement.category === 'university' ? (
              <GraduationCap className="w-4 h-4 text-primary" />
            ) : (
              <Award className="w-4 h-4 text-accent" />
            )}
          </div>
          <div>
            <h3 className="font-extrabold text-mainText text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
              {achievement.institutionOrAward[language]}
            </h3>
            <p className="text-xs font-semibold text-secondary mt-0.5">
              {achievement.fieldOrMajor[language]}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-mutedText leading-relaxed mt-3 pt-3 border-t border-slate-100">
          {achievement.description[language]}
        </p>
      </div>

      {/* Footer: Student name and status */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-medium text-mainText/90">
          {achievement.studentName[language]}
        </span>
        {achievement.isConfirmed ? (
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Tasdiqlangan</span>
          </span>
        ) : (
          <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1" title="Rasmiy ma'lumot kutilmoqda">
            <AlertCircle className="w-3 h-3 text-slate-400" />
            <span>Namuna</span>
          </span>
        )}
      </div>
    </div>
  );
};

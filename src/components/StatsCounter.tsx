import React from 'react';
import { Users, GraduationCap, School, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { schoolInfo } from '../data/schoolInfo';

export const StatsCounter: React.FC = () => {
  const { t } = useLanguage();
  const { statistics } = schoolInfo;

  const stats = [
    {
      id: 'students',
      label: t('stats.students'),
      value: `${statistics.studentsCount}+`,
      icon: Users,
      description: '1–11 sinflarda ta’lim oluvchilar',
    },
    {
      id: 'teachers',
      label: t('stats.teachers'),
      value: `${statistics.teachersCount}+`,
      icon: GraduationCap,
      description: 'Oliy va birinchi toifali pedagoglar',
    },
    {
      id: 'classes',
      label: t('stats.classes'),
      value: `${statistics.classesCount}+`,
      icon: School,
      description: 'Zamonaviy jihozlangan xonalar',
    },
    {
      id: 'achievements',
      label: t('stats.achievements'),
      value: `${statistics.achievementsCount}+`,
      icon: Award,
      description: 'Olimpiada, OTM va sertifikatlar',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`flex flex-col justify-between pt-4 sm:pt-0 ${
                index > 0 ? 'sm:pl-6' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-primary/5 text-primary">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Tasdiqlangan</span>
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight font-sans">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-mainText mt-1 line-clamp-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-mutedText mt-0.5 line-clamp-1">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-mutedText">
        <span>{t('stats.note')}</span>
        <span className="hidden sm:inline font-mono">№36-UZB-STATS</span>
      </div>
    </div>
  );
};

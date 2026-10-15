import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Calendar, Filter, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { AchievementCard } from '../components/AchievementCard';
import { achievementsData, achievementCategories } from '../data/achievementsData';

export const AchievementsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredAchievements = useMemo(() => {
    return achievementsData.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
      return matchesCat && matchesYear;
    });
  }, [selectedCategory, selectedYear]);

  const categories = [
    { id: 'all', label: achievementCategories.all[language] },
    { id: 'university', label: achievementCategories.university[language] },
    { id: 'olympiad', label: achievementCategories.olympiad[language] },
    { id: 'certificate', label: achievementCategories.certificate[language] },
    { id: 'competition', label: achievementCategories.competition[language] },
  ];

  const years = ['all', '2025', '2024'];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page Header and Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Yutuqlar va natijalar</span>
        </div>
        <SectionHeader
          badge="O‘quvchilar natijalari"
          title="Yutuqlar va natijalar — faxrimiz"
          subtitle="Oliy o‘quv yurtlariga talabalikka qabul qilingan o‘quvchilarimiz, fan olimpiadalari g‘oliblari va xalqaro sertifikatlar."
        />
      </div>

      {/* Content Integrity & Verification Banner */}
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Rasmiy ma’lumotlar shaffofligi:</span> Har bir akademik natija, OTMga qabul buyrug‘i va olimpiada diplomi maktab arxivi hamda Davlat test markazi ma’lumotlari asosida qayd etiladi. Sahifadagi profillar namunaviy tartibda kiritilgan.
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-mainText hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-mutedText">Yil:</span>
          <div className="flex gap-1">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1 text-xs rounded-lg font-semibold transition-colors ${
                  selectedYear === yr
                    ? 'bg-secondary text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {yr === 'all' ? 'Barchasi' : `${yr}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Cards Grid */}
      {filteredAchievements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Award className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-mainText">Natijalar topilmadi</h3>
          <p className="text-xs text-mutedText">
            Tanlangan kategoriya yoki yil bo‘yicha hozircha ma’lumot joylashtirilmagan.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedYear('all'); }}
            className="text-xs font-semibold text-secondary hover:underline"
          >
            Barchasini ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
};

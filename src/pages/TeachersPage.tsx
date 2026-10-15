import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Users, Award, BookOpen, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { TeacherCard } from '../components/TeacherCard';
import { teachersData, departmentNames } from '../data/teachersData';

export const TeachersPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTeachers = useMemo(() => {
    return teachersData.filter((teacher) => {
      const matchesDept = selectedDept === 'all' || teacher.department === selectedDept;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        teacher.name.toLowerCase().includes(query) ||
        teacher.subject[language].toLowerCase().includes(query) ||
        teacher.education[language].toLowerCase().includes(query);
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery, language]);

  const departments = [
    { id: 'all', label: departmentNames.all[language] },
    { id: 'exact', label: departmentNames.exact[language] },
    { id: 'natural', label: departmentNames.natural[language] },
    { id: 'languages', label: departmentNames.languages[language] },
    { id: 'humanities', label: departmentNames.humanities[language] },
    { id: 'primary', label: departmentNames.primary[language] },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">O‘qituvchilar</span>
        </div>
        <SectionHeader
          badge="Pedagoglar jamoasi"
          title="Bizning ustozlarimiz — kelajak bunyodkorlari"
          subtitle="Har bir o‘quvchiga individual yondashib, uning iqtidori va qobiliyatini rivojlantiruvchi malakali pedagoglar tarkibi."
        />
      </div>

      {/* Transparency Note */}
      <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-3 text-xs text-primary leading-relaxed">
        <AlertCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Eslatma:</span> Maktab o‘qituvchilari ma’lumotlari va ilmiy toifalari rasmiy attestatsiya natijalari asosida yangilab boriladi. Profil kartochkalari namunaviy shaklda taqdim etilgan.
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="O‘qituvchi ismi yoki fani bo‘yicha qidirish..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl shadow-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Tozalash
            </button>
          )}
        </div>

        {/* Department Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedDept === dept.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-mainText hover:bg-slate-100'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teachers Grid */}
      {filteredTeachers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Users className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-mainText">O‘qituvchi topilmadi</h3>
          <p className="text-xs text-mutedText">
            Kiritilgan qidiruv so‘zi yoki tanlangan yo‘nalish bo‘yicha hech qanday profil mavjud emas.
          </p>
          <button
            onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
            className="text-xs font-semibold text-secondary hover:underline"
          >
            Filtrlarni bekor qilish
          </button>
        </div>
      )}
    </div>
  );
};

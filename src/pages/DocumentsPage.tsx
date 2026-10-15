import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Download, ShieldCheck, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { DocumentRow } from '../components/DocumentRow';
import { schoolDocuments, documentCategories } from '../data/documentsData';

export const DocumentsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDocs = useMemo(() => {
    return schoolDocuments.filter((doc) => {
      const matchesCat = selectedCat === 'all' || doc.category === selectedCat;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        doc.title[language].toLowerCase().includes(query) ||
        doc.fileNumber.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery, language]);

  const categories = [
    { id: 'all', label: documentCategories.all[language] },
    { id: 'charter', label: documentCategories.charter[language] },
    { id: 'regulations', label: documentCategories.regulations[language] },
    { id: 'financial', label: documentCategories.financial[language] },
    { id: 'safety', label: documentCategories.safety[language] },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Hujjatlar</span>
        </div>
        <SectionHeader
          badge="Shaffoflik va ochiq ma’lumotlar"
          title="Rasmiy me’yoriy hujjatlar"
          subtitle="Namangan shahar 36-sonli maktab faoliyatini tartibga soluvchi davlat hujjatlari, maktab ustavi va ochiq hisobotlar kutubxonasi."
        />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative max-w-md w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hujjat nomi yoki raqami bo‘yicha qidirish..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl shadow-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCat === cat.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-mainText hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Documents List */}
      {filteredDocs.length > 0 ? (
        <div className="space-y-3">
          {filteredDocs.map((doc) => (
            <DocumentRow key={doc.id} doc={doc} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-mainText">Hujjat topilmadi</h3>
          <p className="text-xs text-mutedText">
            Ushbu qidiruv bo‘yicha mos keluvchi hujjat mavjud emas.
          </p>
          <button
            onClick={() => { setSelectedCat('all'); setSearchQuery(''); }}
            className="text-xs font-semibold text-secondary hover:underline"
          >
            Barchasini ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
};

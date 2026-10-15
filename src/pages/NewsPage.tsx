import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Bell, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { NewsCard } from '../components/NewsCard';
import { newsArticles, newsCategories } from '../data/newsData';

export const NewsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredNews = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCat = selectedCategory === 'all' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title[language].toLowerCase().includes(query) ||
        article.summary[language].toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const categories = [
    { id: 'all', label: newsCategories.all[language] },
    { id: 'events', label: newsCategories.events[language] },
    { id: 'academic', label: newsCategories.academic[language] },
    { id: 'announcements', label: newsCategories.announcements[language] },
    { id: 'parents', label: newsCategories.parents[language] },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Yangiliklar va tadbirlar</span>
        </div>
        <SectionHeader
          badge="Axborot xizmati"
          title="Yangiliklar va tadbirlar"
          subtitle="Namangan shahar 36-sonli maktab faoliyatiga oid eng so‘nggi rasmiy yangiliklar, e’lonlar va fotoreportajlar."
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
            placeholder="Yangilik sarlavhasi bo‘yicha qidirish..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl shadow-xs focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
          />
        </div>

        {/* Categories */}
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
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.slice(0, visibleCount).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>

          {visibleCount < filteredNews.length && (
            <div className="text-center pt-6">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-mainText font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
              >
                Ko‘proq yangiliklarni yuklash
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <Newspaper className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-mainText">Yangilik topilmadi</h3>
          <p className="text-xs text-mutedText">
            Ushbu qidiruv bo‘yicha hech qanday maqola yoki e’lon mavjud emas.
          </p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="text-xs font-semibold text-secondary hover:underline"
          >
            Barchasini ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
};

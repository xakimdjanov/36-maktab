import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Maximize2, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeader } from '../components/SectionHeader';
import { Lightbox } from '../components/Lightbox';
import { galleryItems, galleryCategories, GalleryItem } from '../data/galleryData';

export const GalleryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      return selectedCat === 'all' || item.category === selectedCat;
    });
  }, [selectedCat]);

  const categories = [
    { id: 'all', label: galleryCategories.all[language] },
    { id: 'classrooms', label: galleryCategories.classrooms[language] },
    { id: 'events', label: galleryCategories.events[language] },
    { id: 'clubs', label: galleryCategories.clubs[language] },
    { id: 'sports', label: galleryCategories.sports[language] },
    { id: 'library', label: galleryCategories.library[language] },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header and Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-xs text-mutedText mb-3">
          <Link to="/" className="hover:text-primary transition-colors">Bosh sahifa</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Fotolavhalar</span>
        </div>
        <SectionHeader
          badge="Maktab hayoti suratlarda"
          title="Fotogalereya"
          subtitle="Namangan shahar 36-sonli maktab o‘quv jarayonlari, to‘garaklar, bayram tadbirlari va sport musobaqalaridan lavhalar."
        />
      </div>

      {/* Category Filter Pills */}
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

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className={`w-full ${item.placeholderAspect} bg-gradient-to-br ${item.bgGradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:scale-105 transition-transform duration-500"></div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full border border-white/20">
                  {item.category}
                </span>
                <span className="p-1.5 bg-black/40 rounded-full text-white/90 group-hover:bg-accent group-hover:text-primary-dark transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="font-extrabold text-sm sm:text-base leading-tight text-white line-clamp-2">
                  {item.title[language]}
                </h4>
              </div>
            </div>

            <div className="p-4 bg-white flex items-center justify-between text-xs text-mutedText">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.date}</span>
              </span>
              <span className="font-medium text-secondary group-hover:underline text-[11px]">
                Kattalashtirish
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
};

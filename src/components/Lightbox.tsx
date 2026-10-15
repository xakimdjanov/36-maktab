import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { GalleryItem } from '../data/galleryData';
import { useLanguage } from '../context/LanguageContext';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-colors focus:ring-2 focus:ring-accent"
          aria-label="Rasmni yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Canvas Representation */}
        <div className={`w-full aspect-[16/10] bg-gradient-to-br ${item.bgGradient} flex flex-col items-center justify-center text-center p-6 text-white relative`}>
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
          <div className="relative z-10 max-w-lg space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full border border-white/20">
              {item.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {item.title[language]}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {item.caption[language]}
            </p>
          </div>
        </div>

        {/* Details Footer */}
        <div className="p-4 sm:p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
          <div className="flex items-center gap-2 text-mutedText">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Sana: {item.date}</span>
          </div>

          <div className="text-[11px] text-slate-500 italic">
            Namangan shahar 36-sonli maktab rasmiy fotogalereyasi
          </div>
        </div>
      </div>
    </div>
  );
};

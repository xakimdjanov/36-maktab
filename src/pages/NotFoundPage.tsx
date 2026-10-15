import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="text-7xl sm:text-8xl font-extrabold text-primary tracking-tighter">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-extrabold text-mainText">
          Sahifa topilmadi
        </h1>
        <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga ko‘chirilgan bo‘lishi mumkin.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Bosh sahifaga qaytish</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-mainText hover:bg-slate-50 text-xs font-bold rounded-xl transition-all"
        >
          <span>Aloqa bo‘limi</span>
        </Link>
      </div>
    </div>
  );
};

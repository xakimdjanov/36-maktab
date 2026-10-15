import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, Bell } from 'lucide-react';
import { NewsArticle } from '../data/newsData';
import { useLanguage } from '../context/LanguageContext';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { language, t } = useLanguage();

  return (
    <article className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Card Header Media Placeholder with School theme */}
        <div className="h-44 bg-gradient-to-br from-primary to-secondary p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
          
          {/* Category Pill and Announcement Tag */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 text-primary px-2.5 py-1 rounded-full shadow-xs">
              {article.category}
            </span>

            {article.isOfficialAnnouncement && (
              <span className="text-[10px] font-bold uppercase bg-accent text-primary-dark px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                <Bell className="w-3 h-3" />
                <span>E’lon</span>
              </span>
            )}
          </div>

          {/* Date & Reading time */}
          <div className="relative z-10 flex items-center gap-3 text-white/90 text-xs font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTimeMinutes} daqiqa</span>
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <h3 className="font-extrabold text-mainText text-base sm:text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {article.title[language]}
          </h3>
          <p className="text-xs sm:text-sm text-mutedText leading-relaxed line-clamp-3">
            {article.summary[language]}
          </p>
        </div>
      </div>

      {/* Card Footer: Detail Link */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        <Link
          to={`/news/${article.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary group-hover:text-secondary transition-colors"
        >
          <span>{t('common.details')}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

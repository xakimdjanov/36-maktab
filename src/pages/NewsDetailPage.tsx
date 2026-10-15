import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/newsData';
import { NewsCard } from '../components/NewsCard';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const article = newsArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4 space-y-4">
        <h2 className="text-2xl font-bold text-primary">Maqola topilmadi</h2>
        <p className="text-xs text-mutedText">
          Siz qidirayotgan maqola mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
        </p>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Yangiliklar ro‘yxatiga qaytish</span>
        </Link>
      </div>
    );
  }

  const relatedArticles = newsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="py-10 sm:py-16 space-y-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Back button and breadcrumb */}
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors mb-4 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Orqaga qaytish</span>
        </button>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full border border-secondary/20">
            {article.category}
          </span>
          {article.isOfficialAnnouncement && (
            <span className="text-[11px] font-bold uppercase bg-accent text-primary-dark px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Bell className="w-3 h-3" />
              <span>Rasmiy e’lon</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-tight mb-4">
          {article.title[language]}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-mutedText border-y border-slate-200 py-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>{article.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-400" />
            <span>{article.author[language]}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{article.readingTimeMinutes} daqiqa mutolaa</span>
          </div>
        </div>
      </div>

      {/* Featured Header Card */}
      <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
        <p className="text-sm sm:text-base leading-relaxed font-medium">
          {article.summary[language]}
        </p>
      </div>

      {/* Full Content */}
      <div className="prose prose-slate max-w-none space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {article.content[language].map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Attribution & Notice */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-mutedText flex items-center justify-between">
        <div>
          <span>Manba: </span>
          <strong className="text-slate-700">Namangan shahar 36-sonli maktab axborot xizmati</strong>
        </div>
        <span className="text-[11px]">№36-NEWS-{article.id}</span>
      </div>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            Mavzuga doir boshqa yangiliklar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <NewsCard key={rel.id} article={rel} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

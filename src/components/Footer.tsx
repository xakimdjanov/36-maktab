import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SchoolBadge } from './SchoolBadge';
import { schoolInfo } from '../data/schoolInfo';
import { Language } from '../data/translations';

export const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { id: 'bosh-sahifa', label: t('nav.home') },
    { id: 'maktab-haqida', label: t('nav.about') },
    { id: 'maktab-direktori', label: t('nav.director') },
    { id: 'oqituvchilar', label: t('nav.teachers') },
    { id: 'yutuqlar', label: t('nav.achievements') },
    { id: 'talim', label: t('nav.education') },
    { id: 'yangiliklar', label: t('nav.news') },
    { id: 'ota-onalar', label: t('nav.parents') },
    { id: 'aloqa', label: t('nav.contact') },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: "O'zbekcha" },
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' },
  ];

  return (
    <footer className="bg-[#11220F] text-[#A7C1A4] text-sm pt-16 pb-12 px-4 sm:px-6 border-t border-[#8EA98B]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Principal (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <SchoolBadge size={52} />
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight leading-tight">
                  36-SONLI MAKTAB
                </h3>
                <p className="text-xs text-[#8EA98B] font-semibold">
                  {schoolInfo.city} umumta’lim muassasasi
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#D2E2D0]">
              {t('school.tagline')}
            </p>

            {/* Principal card */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1.5">
              <div className="text-xs uppercase font-extrabold tracking-wider text-[#8EA98B]">
                {schoolInfo.principal.role[language]}
              </div>
              <div className="text-base font-extrabold text-white">
                {schoolInfo.principal.name}
              </div>
              <div className="text-xs text-[#D2E2D0]">
                {schoolInfo.principal.receptionHours[language]}
              </div>
            </div>
          </div>

          {/* Sequential Landing Page Sections (Col 5-7) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              Sayt bo‘limlari
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-2 text-[#D2E2D0] hover:text-white transition-colors py-0.5 cursor-pointer text-left font-semibold text-sm"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 8-12) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              {t('nav.contact')}
            </h4>

            <div className="space-y-3 text-sm text-[#D2E2D0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8EA98B] shrink-0 mt-0.5" />
                <span>{schoolInfo.address[language]}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8EA98B] shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="text-white hover:text-[#8EA98B] font-bold transition-colors">
                  {schoolInfo.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8EA98B] shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white underline break-all font-mono text-xs">
                  {schoolInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#8EA98B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-xs">{t('footer.officialHours')}</div>
                  <div className="text-xs text-[#D2E2D0] mt-0.5">{schoolInfo.workingHours[language]}</div>
                </div>
              </div>
            </div>

            {/* Language switcher */}
            <div className="pt-2">
              <div className="flex gap-1 bg-white/10 p-1 rounded-full w-fit border border-white/10">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-3 py-1 text-xs rounded-full transition-all cursor-pointer font-bold ${
                      language === l.code
                        ? 'bg-[#8EA98B] text-[#11220F] shadow-xs'
                        : 'text-[#D2E2D0] hover:text-white'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A7C1A4]">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {schoolInfo.name[language]}. {t('footer.copyright')}
          </div>

          {/* Powered by xakimdjanov */}
          <div className="flex items-center gap-1.5 text-xs text-[#A7C1A4]">
            <span>Powered by</span>
            <a
              href="https://xakimdjanov.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-white hover:text-[#8EA98B] transition-all px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center gap-1.5 tracking-wide shadow-xs"
            >
              <span>xakimdjanov</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8EA98B] animate-pulse"></span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://emaktab.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors font-semibold"
            >
              <ShieldCheck className="w-4 h-4 text-[#8EA98B]" />
              <span>eMaktab tizimi</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
              aria-label="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

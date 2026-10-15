import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SchoolBadge } from './SchoolBadge';
import { Language } from '../data/translations';

interface NavItem {
  id: string;
  label: string;
}

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('bosh-sahifa');
  const [isScrolled, setIsScrolled] = useState(false);

  // Exact navigation items matching Image 1:
  // [Bosh sahifa]  Maktab haqida  Maktab direktori  O‘qituvchilar  Yutuqlar  Ta’lim  Yangiliklar  Ota-onalar uchun  Aloqa
  const navItems: NavItem[] = [
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

  const languages: { code: Language; short: string; label: string }[] = [
    { code: 'uz', short: "O'zb", label: "O'zbekcha" },
    { code: 'ru', short: 'Рус', label: 'Русский' },
    { code: 'en', short: 'Eng', label: 'English' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Scroll spy & shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top micro bar in dark forest tone */}
      <div className="bg-[#182B17] text-white text-xs py-2 px-3 sm:px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 truncate font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6E956B] shrink-0 animate-pulse"></span>
            <span className="truncate tracking-wide">{t('school.name')}</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+998692244406"
              className="flex items-center gap-1.5 text-white/95 hover:text-[#C8DCC6] transition-colors font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#8EA98B]" />
              <span>+998 69 224-44-06</span>
            </a>

            {/* Language switch pill */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    language === l.code
                      ? 'bg-white text-[#182B17] shadow-xs'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Apple Frosted Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full apple-glass transition-all duration-300 border-b ${
          isScrolled ? 'border-[#4E724B]/20 shadow-apple-sm' : 'border-black/[0.05]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo brand with public/logo.png */}
          <button
            type="button"
            onClick={() => scrollToSection('bosh-sahifa')}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
            aria-label="Namangan 36-maktab bosh sahifasiga qaytish"
          >
            <SchoolBadge size={46} className="transition-transform group-hover:scale-105" />
            <div className="min-w-0">
              <span className="font-extrabold text-base sm:text-lg text-[#112010] tracking-tight block leading-tight">
                36-MAKTAB
              </span>
              <span className="text-xs text-[#3B5239] block font-semibold tracking-tight truncate">
                {t('nav.city')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Container — Exact match of user Image 1 */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#E2EDE1]/80 p-1.5 rounded-full border border-[#4E724B]/25 shadow-apple-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-200 cursor-pointer whitespace-nowrap text-sm ${
                    isActive
                      ? 'border-2 border-[#4E724B] text-[#0F1E0E] font-extrabold bg-white rounded-full shadow-sm px-4 py-1.5'
                      : 'text-[#2D452B] hover:text-[#0F1E0E] hover:bg-black/[0.03] font-bold px-3 py-1.5 rounded-full'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('aloqa')}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold bg-[#4E724B] hover:bg-[#3B5738] text-white shadow-apple-sm hover:shadow-apple transition-all active:scale-95 cursor-pointer"
            >
              {t('nav.contactBtn')}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full text-[#112010] hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Drawer - Outside header to escape stacking context, z-[99999] with Apple Slide Down */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[99999] bg-[#0B150A]/75 backdrop-blur-md flex flex-col justify-start p-3 sm:p-6 animate-backdrop-fade"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-full sm:max-w-md mx-auto rounded-3xl max-h-[92vh] overflow-y-auto p-6 sm:p-7 flex flex-col justify-between shadow-2xl border-2 border-[#4E724B]/35 animate-menu-slide-down mt-2 sm:mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header inside drawer with close button */}
            <div className="flex items-center justify-between border-b border-[#4E724B]/20 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <SchoolBadge size={40} />
                <div>
                  <span className="font-extrabold text-[#0F1E0E] text-base leading-tight block">
                    36-sonli maktab
                  </span>
                  <span className="text-xs text-[#3B5239] font-semibold block">
                    {t('nav.city')}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 bg-[#E2EDE1] hover:bg-[#C8DCC6] rounded-full text-[#0F1E0E] transition-colors cursor-pointer"
                aria-label="Menyuni yopish"
              >
                <X className="w-5 h-5 text-[#0F1E0E]" />
              </button>
            </div>

            <div className="space-y-1.5 overflow-y-auto max-h-[50vh] pr-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#4E724B] mb-2 px-2">
                {t('nav.sections')}
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-2xl text-base font-extrabold flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'border-2 border-[#4E724B] text-[#0F1E0E] bg-[#E2EDE1] shadow-apple-sm'
                        : 'text-[#182B17] hover:bg-[#F2F7F1]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 text-[#4E724B]" />
                  </button>
                );
              })}
            </div>

            <div className="pt-5 mt-4 border-t border-[#4E724B]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-[#0F1E0E] font-extrabold">{t('nav.chooseLang')}</span>
                <div className="flex gap-1.5 bg-[#F2F7F1] p-1.5 rounded-full border border-[#4E724B]/25">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLanguage(l.code)}
                      className={`px-3 py-1 text-xs rounded-full font-extrabold transition-all cursor-pointer ${
                        language === l.code
                          ? 'bg-[#4E724B] text-white shadow-xs'
                          : 'text-[#182B17] hover:text-[#0F1E0E]'
                      }`}
                    >
                      {l.short}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="tel:+998692244406"
                className="w-full py-3.5 bg-[#4E724B] hover:bg-[#3B5738] text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-apple-sm transition-all"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>+998 69 224-44-06</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

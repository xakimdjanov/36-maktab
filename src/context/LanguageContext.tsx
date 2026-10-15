import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check URL query param first
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language;
      if (urlLang && ['uz', 'ru', 'en'].includes(urlLang)) {
        return urlLang;
      }
      // 2. Check localStorage
      const stored = localStorage.getItem('namangan36_lang') as Language;
      if (stored && ['uz', 'ru', 'en'].includes(stored)) {
        return stored;
      }
    }
    return 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('namangan36_lang', lang);
      // Update URL search param without reloading
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, defaultText: string = ''): string => {
    const entry = translations[key];
    if (entry && entry[language]) {
      return entry[language];
    }
    if (entry && entry.uz) {
      return entry.uz;
    }
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

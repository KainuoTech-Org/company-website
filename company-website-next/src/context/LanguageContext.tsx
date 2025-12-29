"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { i18n } from '@/lib/i18n/dictionaries';

export type Language = 'en' | 'zh-TW' | 'zh-CN';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language or detect browser language
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'zh-TW' || savedLang === 'zh-CN')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string) => {
    // @ts-ignore
    return i18n[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LocalizedText } from '../types/models';
import { getTranslation, TranslationKey } from '../content/translations';
import { siteConfig } from '../config/site-config';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  t: TranslationKey;
  localize: (text: LocalizedText | undefined | null) => string;
}

const STORAGE_KEY = 'ts_academy_selected_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage;
      if (saved === 'en' || saved === 'gu') {
        return saved;
      }
    } catch {
      // LocalStorage unavailable
    }
    return siteConfig.defaultLanguage;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors
    }
    // Update HTML root tag lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'gu' ? 'en' : 'gu'));
  };

  const t = getTranslation(language);

  const localize = (text: LocalizedText | undefined | null): string => {
    if (!text) return '';
    return text[language] || text.gu || text.en || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, localize }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

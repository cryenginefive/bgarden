import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Record<string, { tr: string; en: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [language, setLanguageState] = useState<Language>('tr');
  const [translations, setTranslations] = useState<Record<string, { tr: string; en: string }>>({});

  useEffect(() => {
    loadTranslations();
    detectLanguage();
  }, []);

  useEffect(() => {
    if (user) {
      loadUserLanguage();
    }
  }, [user]);

  const detectLanguage = () => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('tr')) {
      setLanguageState('tr');
    } else {
      setLanguageState('en');
    }
  };

  const loadTranslations = async () => {
    const { data } = await supabase
      .from('translations')
      .select('*');

    if (data) {
      const translationsMap: Record<string, { tr: string; en: string }> = {};
      data.forEach((item) => {
        translationsMap[item.key] = { tr: item.tr, en: item.en };
      });
      setTranslations(translationsMap);
    }
  };

  const loadUserLanguage = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('user_preferences')
      .select('language')
      .eq('user_id', user.id)
      .maybeSingle();

    if (data) {
      setLanguageState(data.language);
    }
  };

  const setLanguage = async (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);

    if (user) {
      await supabase
        .from('user_preferences')
        .upsert({
          user_id: user.id,
          language: newLang,
          updated_at: new Date().toISOString()
        });
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

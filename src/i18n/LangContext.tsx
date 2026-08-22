import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { dictionaries } from './dictionaries';
import type { Dictionary, Lang } from './dictionaries';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* storage indisponível */
  }
  return 'pt';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage indisponível */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang deve ser usado dentro de LangProvider');
  return ctx;
}

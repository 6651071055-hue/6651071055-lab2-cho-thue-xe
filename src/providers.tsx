import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { CompareContext, I18nContext, dict, type Key, type Lang } from './context';

function initialLang(): Lang {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'vi';
  } catch {
    return 'vi';
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [ids, setIds] = useState<number[]>([]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch { /* bỏ qua */ }
    document.documentElement.lang = l;
  }, []);
  const t = useCallback((k: Key) => dict[lang][k], [lang]);
  const toggle = useCallback((id: number) => {
    setIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length >= 3 ? p : [...p, id]));
  }, []);
  const clear = useCallback(() => setIds([]), []);

  const i18n = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  const cmp = useMemo(() => ({ ids, toggle, clear }), [ids, toggle, clear]);

  return (
    <I18nContext.Provider value={i18n}>
      <CompareContext.Provider value={cmp}>{children}</CompareContext.Provider>
    </I18nContext.Provider>
  );
}

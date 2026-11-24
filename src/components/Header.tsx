import { Link } from 'react-router-dom';
import { useCompare, useI18n } from '../context';

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { ids } = useCompare();
  return (
    <header className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">🚗 {t('brand')}</Link>
        <nav className="flex items-center gap-3">
          <Link to="/compare" className="rounded-md px-3 py-1.5 font-medium hover:bg-white/20">
            {t('compare')} ({ids.length})
          </Link>
          <button
            type="button"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            aria-label={t('switchLang')}
            className="rounded-md border border-white/60 px-3 py-1.5 text-sm font-semibold hover:bg-white/20"
          >
            {lang === 'vi' ? 'EN' : 'VI'}
          </button>
        </nav>
      </div>
    </header>
  );
}

import { useMemo, useState } from 'react';
import { CarCard } from '../components/CarCard';
import { CardSkeleton } from '../components/Skeleton';
import { useI18n } from '../context';
import { useCars } from '../hooks';

const TYPES = ['Sedan', 'SUV', 'MPV', 'Hatchback', 'Pickup'];

export default function ListPage() {
  const { t } = useI18n();
  const cars = useCars();
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');

  const list = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return (cars ?? []).filter(
      (c) => (type === 'all' || c.type === type) && `${c.name} ${c.brand}`.toLowerCase().includes(kw),
    );
  }, [cars, q, type]);

  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{t('heroTitle')}</h1>
      <div className="my-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t('search')}
          aria-label={t('search')}
          className="w-full rounded-md border border-gray-400 px-3 py-2 sm:max-w-sm"
        />
        <select value={type} onChange={(e) => setType(e.target.value)} aria-label={t('type')} className="rounded-md border border-gray-400 px-3 py-2">
          <option value="all">{t('allTypes')}</option>
          {TYPES.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cars === null
          ? Array.from({ length: 8 }, (_, i) => <CardSkeleton key={i} />)
          : list.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
      {cars !== null && list.length === 0 && <p className="mt-6 text-gray-700">{t('noResult')}</p>}
    </section>
  );
}

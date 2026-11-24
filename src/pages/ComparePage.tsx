import { Link } from 'react-router-dom';
import { Skeleton } from '../components/Skeleton';
import { useCompare, useI18n, type Key } from '../context';
import { useCars } from '../hooks';
import type { Car } from '../types';
import { formatCurrency } from '../utils';

export default function ComparePage() {
  const { t } = useI18n();
  const { ids, toggle, clear } = useCompare();
  const cars = useCars();
  const picked = (cars ?? []).filter((c) => ids.includes(c.id));
  const rows: [Key, (c: Car) => string][] = [
    ['price', (c) => `${formatCurrency(c.pricePerDay)} ${t('perDay')}`],
    ['type', (c) => c.type],
    ['seats', (c) => `${c.seats}`],
    ['transmission', (c) => t(c.transmission)],
    ['fuel', (c) => t(c.fuel as Key)],
    ['city', (c) => c.city],
    ['rating', (c) => `⭐ ${c.rating}`],
  ];

  return (
    <section>
      <Link to="/" className="font-medium text-brand-dark hover:underline">{t('back')}</Link>
      <h1 className="my-4 text-2xl font-bold text-gray-900">{t('compareTitle')}</h1>
      {cars === null ? (
        <Skeleton />
      ) : picked.length === 0 ? (
        <p>{t('compareEmpty')}</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="p-3"><span className="sr-only">{t('compare')}</span></th>
                  {picked.map((c) => (
                    <th scope="col" key={c.id} className="p-3">
                      <Link to={`/item/${c.id}`} className="text-brand-dark hover:underline">{c.name}</Link>
                      <button type="button" onClick={() => toggle(c.id)} aria-label={`${t('removeCompare')} ${c.name}`} className="ml-2 text-gray-600 hover:text-gray-900">✕</button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([k, fn]) => (
                  <tr key={k} className="border-b border-gray-200">
                    <th scope="row" className="p-3 font-semibold text-gray-800">{t(k)}</th>
                    {picked.map((c) => <td key={c.id} className="p-3 text-gray-800">{fn(c)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="button" onClick={clear} className="mt-4 rounded-md border border-brand-dark px-4 py-2 font-semibold text-brand-dark hover:bg-brand-light">{t('clear')}</button>
        </>
      )}
    </section>
  );
}

import { Link } from 'react-router-dom';
import { useCompare, useI18n, type Key } from '../context';
import type { Car } from '../types';
import { formatCurrency } from '../utils';
import { carImage } from './carImage';

export function CarCard({ car }: { car: Car }) {
  const { t } = useI18n();
  const { ids, toggle } = useCompare();
  const selected = ids.includes(car.id);
  const full = !selected && ids.length >= 3;
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <img src={carImage(car.color)} alt={`${car.name} ${car.type}`} loading="lazy" width={320} height={180} className="h-36 w-full rounded-lg object-cover" />
      <h2 className="mt-3 text-lg font-semibold text-gray-900">
        <Link to={`/item/${car.id}`} className="hover:underline">{car.name}</Link>
      </h2>
      <p className="text-sm text-gray-600">
        {car.type} • {car.seats} {t('seats')} • {t(car.transmission)} • {t(car.fuel as Key)}
      </p>
      <p className="mt-2 font-bold text-brand-dark">{formatCurrency(car.pricePerDay)} {t('perDay')}</p>
      <button
        type="button"
        onClick={() => toggle(car.id)}
        disabled={full}
        aria-pressed={selected}
        title={full ? t('compareMax') : undefined}
        className={`mt-3 rounded-md border px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 ${
          selected ? 'border-brand-dark bg-brand-dark text-white' : 'border-brand-dark text-brand-dark hover:bg-brand-light'
        }`}
      >
        {selected ? t('removeCompare') : t('addCompare')}
      </button>
    </article>
  );
}

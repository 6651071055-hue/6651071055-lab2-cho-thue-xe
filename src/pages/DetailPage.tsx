import { Link, useParams } from 'react-router-dom';
import { carImage } from '../components/carImage';
import { DetailSkeleton } from '../components/Skeleton';
import { useCompare, useI18n, type Key } from '../context';
import { useCars } from '../hooks';
import { formatCurrency } from '../utils';

export default function DetailPage() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const { ids, toggle } = useCompare();
  const cars = useCars();
  const car = cars?.find((c) => c.id === Number(id));

  return (
    <section>
      <Link to="/" className="font-medium text-brand-dark hover:underline">{t('back')}</Link>
      <div className="mt-4">
        {cars === null ? (
          <DetailSkeleton />
        ) : !car ? (
          <p>{t('notFound')}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <img src={carImage(car.color)} alt={`${car.name} ${car.type}`} width={320} height={180} className="w-full rounded-xl" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
              <p className="mt-2 text-gray-700">{car.desc[lang]}</p>
              <ul className="mt-4 space-y-1 text-gray-800">
                <li>{t('type')}: {car.type} • {car.seats} {t('seats')}</li>
                <li>{t('transmission')}: {t(car.transmission)}</li>
                <li>{t('fuel')}: {t(car.fuel as Key)}</li>
                <li>{t('city')}: {car.city}</li>
                <li>{t('rating')}: ⭐ {car.rating}</li>
              </ul>
              <p className="mt-4 text-2xl font-bold text-brand-dark">{formatCurrency(car.pricePerDay)} {t('perDay')}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" className="rounded-md bg-brand-dark px-4 py-2 font-semibold text-white hover:opacity-90">{t('rent')}</button>
                <button type="button" onClick={() => toggle(car.id)} aria-pressed={ids.includes(car.id)} className="rounded-md border border-brand-dark px-4 py-2 font-semibold text-brand-dark hover:bg-brand-light">
                  {ids.includes(car.id) ? t('removeCompare') : t('addCompare')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import type { Car } from './types';

/** Tải data.json (giả lập độ trễ mạng 700ms để hiển thị Skeleton). */
export function useCars(): Car[] | null {
  const [cars, setCars] = useState<Car[] | null>(null);
  useEffect(() => {
    let off = false;
    Promise.all([import('./data/cars.json'), new Promise((r) => setTimeout(r, 700))]).then(([m]) => {
      if (!off) setCars(m.default as unknown as Car[]);
    });
    return () => { off = true; };
  }, []);
  return cars;
}

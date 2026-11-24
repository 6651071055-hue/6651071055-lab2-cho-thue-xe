export interface Car {
  id: number;
  name: string;
  brand: string;
  type: 'Sedan' | 'SUV' | 'MPV' | 'Hatchback' | 'Pickup';
  seats: number;
  transmission: 'AT' | 'MT';
  fuel: 'petrol' | 'diesel' | 'electric';
  pricePerDay: number;
  city: string;
  rating: number;
  color: string;
  desc: { vi: string; en: string };
}

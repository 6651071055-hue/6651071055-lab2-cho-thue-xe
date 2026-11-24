import { createContext, useContext } from 'react';

export const dict = {
  vi: {
    brand: 'DriveEasy', heroTitle: 'Thuê xe tự lái dễ dàng', search: 'Tìm tên xe hoặc hãng...',
    allTypes: 'Tất cả loại xe', perDay: '/ngày', seats: 'chỗ', back: '← Quay lại danh sách',
    addCompare: 'Thêm so sánh', removeCompare: 'Bỏ so sánh', compareMax: 'Chỉ so sánh tối đa 3 xe',
    compare: 'So sánh', compareTitle: 'So sánh xe', compareEmpty: 'Chưa có xe nào. Hãy chọn ít nhất 2 xe ở trang danh sách.',
    clear: 'Xóa tất cả', noResult: 'Không tìm thấy xe phù hợp.', notFound: 'Không tìm thấy xe này.',
    type: 'Loại xe', transmission: 'Hộp số', fuel: 'Nhiên liệu', city: 'Khu vực', rating: 'Đánh giá', price: 'Giá thuê',
    AT: 'Tự động', MT: 'Số sàn', petrol: 'Xăng', diesel: 'Dầu', electric: 'Điện', rent: 'Đặt xe ngay',
    switchLang: 'Chuyển sang tiếng Anh',
  },
  en: {
    brand: 'DriveEasy', heroTitle: 'Self-drive car rental made easy', search: 'Search car name or brand...',
    allTypes: 'All car types', perDay: '/day', seats: 'seats', back: '← Back to list',
    addCompare: 'Add to compare', removeCompare: 'Remove', compareMax: 'You can compare up to 3 cars',
    compare: 'Compare', compareTitle: 'Compare cars', compareEmpty: 'No cars yet. Pick at least 2 cars from the list.',
    clear: 'Clear all', noResult: 'No matching cars found.', notFound: 'Car not found.',
    type: 'Type', transmission: 'Transmission', fuel: 'Fuel', city: 'Location', rating: 'Rating', price: 'Price',
    AT: 'Automatic', MT: 'Manual', petrol: 'Petrol', diesel: 'Diesel', electric: 'Electric', rent: 'Book now',
    switchLang: 'Switch to Vietnamese',
  },
} as const;

export type Lang = keyof typeof dict;
export type Key = keyof typeof dict.vi;

export interface I18n { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }
export const I18nContext = createContext<I18n | null>(null);
export function useI18n(): I18n {
  const c = useContext(I18nContext);
  if (!c) throw new Error('I18nContext missing');
  return c;
}

export interface CompareState { ids: number[]; toggle: (id: number) => void; clear: () => void }
export const CompareContext = createContext<CompareState | null>(null);
export function useCompare(): CompareState {
  const c = useContext(CompareContext);
  if (!c) throw new Error('CompareContext missing');
  return c;
}

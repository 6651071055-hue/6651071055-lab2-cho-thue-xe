export function carImage(color: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"><rect width="320" height="180" fill="#ECFDF5"/><path d="M50 118l22-38c4-6 10-10 18-10h120c8 0 15 4 19 10l31 38v20H50z" fill="${color}"/><path d="M92 84h60v30H78zM162 84h52l22 30h-74z" fill="#ECFDF5"/><circle cx="100" cy="140" r="17" fill="#1f2937"/><circle cx="230" cy="140" r="17" fill="#1f2937"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

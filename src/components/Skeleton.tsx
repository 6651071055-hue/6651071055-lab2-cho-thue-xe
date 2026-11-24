export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4" aria-hidden="true">
      <div className="h-36 rounded-lg bg-gray-200" />
      <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
      <div className="mt-4 h-9 rounded bg-gray-200" />
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="grid animate-pulse gap-6 md:grid-cols-2" aria-hidden="true">
      <div className="h-64 rounded-xl bg-gray-200" />
      <div className="space-y-3">
        <div className="h-8 w-2/3 rounded bg-gray-200" />
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="h-10 w-40 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export function Skeleton() {
  return <div className="h-48 animate-pulse rounded-xl bg-gray-200" aria-hidden="true" />;
}

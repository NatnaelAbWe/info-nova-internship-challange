export const SkeletonCard = () => {
  <div className="animate-pulse rounded-xl border border-gray-200 p-4">
    <div className="h-48 w-full rounded-lg bg-gray-200"></div>
    <div className="mt-4 h-6 w-3/4 rounded bg-gray-200"></div>
    <div className="mt-2 h-4 w-1/2 rounded bg-gray-200"></div>
    <div className="mt-4 flex justiy-between">
      <div className="h-6 w-16 rounded bg-gray-200"></div>
      <div className="h-6 w-16 rounded bg-gray-200"></div>
    </div>
  </div>;
};

export const SkeletonCard = () => (
  <div className="bg-gray-200 animate-pulse rounded-2xl h-[400px] w-full">
    <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
    <div className="p-5 space-y-4">
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="flex justify-between pt-4">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

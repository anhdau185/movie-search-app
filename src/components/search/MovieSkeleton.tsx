export default function MovieSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl bg-gray-800">
      <div className="h-72 w-full bg-gray-700" />
      <div className="p-4">
        <div className="mb-2 h-5 w-3/4 rounded bg-gray-700" />
        <div className="h-4 w-1/2 rounded bg-gray-600" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-gray-500">Loading technologies...</p>
    </div>
  );
}
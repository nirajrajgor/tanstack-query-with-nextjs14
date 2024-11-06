export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-blue-500"></div>
      <p className="mt-4 text-lg text-gray-700">Loading...</p>
    </div>
  );
}

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-blue-600">RotaGenius</h1>
        <p className="mt-4 text-xl text-gray-700">
          Intelligent, fair, and fast emergency shift scheduling.
        </p>
        <p className="mt-2 text-gray-500">
          Reduce scheduling time from hours to minutes.
        </p>
        <div className="mt-8">
          <Link href="/dashboard" className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

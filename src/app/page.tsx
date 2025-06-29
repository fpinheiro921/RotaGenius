import Link from 'next/link';

function Hero() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 text-center">
      <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight mb-4">
        RotaGenius
      </h1>
      <p className="text-xl text-gray-700 max-w-xl mx-auto mb-6">
        Intelligent, fair, and fast emergency shift scheduling for modern healthcare teams.
      </p>
      <p className="text-gray-500 mb-8">
        Reduce scheduling time from hours to minutes. Ensure fairness, compliance, and satisfaction.
      </p>
      <Link
        href="/dashboard"
        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow hover:bg-blue-800 transition"
      >
        Go to Dashboard
      </Link>
    </section>
  );
}

function Features() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 grid gap-12 md:grid-cols-3">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-blue-600 text-3xl mb-2">⚡</span>
        <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
        <p className="text-gray-600 text-center">
          Generate complex, compliant schedules in under a minute.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-blue-600 text-3xl mb-2">🤝</span>
        <h3 className="font-bold text-lg mb-2">Fair & Transparent</h3>
        <p className="text-gray-600 text-center">
          Built-in fairness and compliance rules. No more manual errors or bias.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <span className="text-blue-600 text-3xl mb-2">📱</span>
        <h3 className="font-bold text-lg mb-2">Accessible Anywhere</h3>
        <p className="text-gray-600 text-center">
          Mobile-friendly, responsive, and exportable to your favorite calendar.
        </p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

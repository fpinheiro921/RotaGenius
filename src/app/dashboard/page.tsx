import Link from 'next/link';

function DashboardCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
      <h2 className="font-semibold text-lg text-blue-700">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">{description}</p>
      {children}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to your RotaGenius dashboard.</p>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        <DashboardCard
          title="Current Schedule"
          description="Q3 2024 ER Schedule"
        >
          <Link
            href="#"
            className="text-blue-600 hover:underline font-medium mt-2"
          >
            View Calendar
          </Link>
        </DashboardCard>
        <DashboardCard
          title="User Management"
          description="2 active users"
        >
          <Link
            href="/users"
            className="text-blue-600 hover:underline font-medium mt-2"
          >
            Manage Users
          </Link>
        </DashboardCard>
        <DashboardCard
          title="Quick Actions"
          description="Common admin tasks"
        >
          <button className="mt-2 w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            Generate New Schedule
          </button>
        </DashboardCard>
      </div>
    </main>
  );
}

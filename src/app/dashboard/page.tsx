import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to your RotaGenius dashboard.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for dashboard widgets */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg">Current Schedule</h2>
          <p className="mt-2 text-sm text-gray-500">Q3 2024 ER Schedule</p>
          <Link href="#" className="text-blue-600 hover:underline mt-4 inline-block">
            View Calendar
          </Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg">User Management</h2>
          <p className="mt-2 text-sm text-gray-500">2 active users</p>
           <Link href="/users" className="text-blue-600 hover:underline mt-4 inline-block">
            Manage Users
          </Link>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg">Quick Actions</h2>
           <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Generate New Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

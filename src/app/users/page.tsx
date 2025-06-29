import { prisma } from '@/lib/prisma';

interface User {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  role: {
    name: string;
  };
}

async function getUsers(): Promise<User[]> {
  const users = await prisma.user.findMany({
    include: {
      role: true,
    },
  });
  return users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="py-4">
            <p className="font-semibold">{user.fullName}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Role: {user.role.name}</p>
          </li>
        ))}
        {users.length === 0 && (
            <p>No users found. Please seed the database.</p>
        )}
      </ul>
    </div>
  );
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Create Roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
      permissions: {
        "manageUsers": true,
        "manageSchedules": true,
        "viewAnalytics": true
      },
    },
  });

  const physicianRole = await prisma.role.upsert({
    where: { name: 'Physician' },
    update: {},
    create: {
      name: 'Physician',
       permissions: {
        "viewSchedule": true,
        "requestTimeOff": true
      },
    },
  });

  console.log('Created roles...');

  // Create Users
  await prisma.user.upsert({
    where: { email: 'a.sharma@hospital.com' },
    update: {},
    create: {
      email: 'a.sharma@hospital.com',
      fullName: 'Dr. Anya Sharma',
      roleId: adminRole.id,
      phoneNumber: '555-123-4567',
    },
  });

  await prisma.user.upsert({
    where: { email: 'b.carter@hospital.com' },
    update: {},
    create: {
      email: 'b.carter@hospital.com',
      fullName: 'Dr. Ben Carter',
      roleId: physicianRole.id,
      phoneNumber: '555-987-6543',
    },
  });
  
  console.log('Created users...');

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

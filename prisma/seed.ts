import { PrismaClient, StaffRole, StaffStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('í¼± Seeding database...');

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Check if SuperAdmin already exists
  const existingSuperAdmin = await prisma.staff.findFirst({
    where: { role: StaffRole.SUPER_ADMIN },
  });

  if (existingSuperAdmin) {
    console.log('âš ï¸  SuperAdmin already exists. Skipping seed.');
    console.log('í³§ Username:', existingSuperAdmin.username);
    return;
  }

  // Create SuperAdmin
  await prisma.staff.create({
    data: {
      firstName: 'Super',
      lastName: 'Admin',
      username: 'superadmin',
      password: hashedPassword,
      role: StaffRole.SUPER_ADMIN,
      position: 'Super Administrator',
      phone: '+998901234567',
      address: 'Toshkent, Chilonzor',
      status: StaffStatus.ACTIVE,
    },
  });

  console.log('âœ… SuperAdmin created successfully!');
  console.log('í³§ Username: superadmin');
  console.log('í´‘ Password: admin123');
  console.log('í±¤ Role: SUPER_ADMIN');
  console.log('í¾‰ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('âŒ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

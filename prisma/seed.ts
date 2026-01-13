import { PrismaClient, StaffRole, StaffStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash password
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Check if SuperAdmin already exists
  const existingSuperAdmin = await prisma.staff.findFirst({
    where: { role: StaffRole.SUPER_ADMIN },
  });

  if (existingSuperAdmin) {
    console.log('⚠️  SuperAdmin already exists. Skipping seed.');
    console.log('📧 Username:', existingSuperAdmin.username);
    return;
  }

  // Create SuperAdmin
  const superAdmin = await prisma.staff.create({
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

  console.log('✅ SuperAdmin created successfully!');
  console.log('📧 Username: superadmin');
  console.log('🔑 Password: admin123');
  console.log('👤 Role: SUPER_ADMIN');
  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
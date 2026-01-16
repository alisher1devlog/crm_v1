import { Module } from '@nestjs/common';
import { StaffResolver } from './staff.resolver';
import { StaffService } from './staff.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [StaffResolver, StaffService],
  exports: [StaffService],
})
export class StaffModule {}

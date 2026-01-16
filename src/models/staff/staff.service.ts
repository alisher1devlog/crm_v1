import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStaffInput, UpdateStaffInput } from './staff.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateStaffInput) {
    const hashedPassword = await bcrypt.hash(input.password, 10);

    return this.prisma.staff.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        username: input.username,
        password: hashedPassword,
        role: input.role as any,
        position: input.position,
        phone: input.phone,
        address: input.address,
      },
    });
  }

  async findAll() {
    return this.prisma.staff.findMany();
  }

  async findOne(id: number) {
    return this.prisma.staff.findUnique({
      where: { id },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.staff.findUnique({
      where: { username },
    });
  }

  async update(id: number, input: UpdateStaffInput) {
    return this.prisma.staff.update({
      where: { id },
      data: input,
    });
  }

  async delete(id: number) {
    return this.prisma.staff.delete({
      where: { id },
    });
  }
}

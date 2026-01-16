import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentInput, UpdateStudentInput } from './student.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateStudentInput) {
    let hashedPassword: string | undefined;
    if (input.password) {
      hashedPassword = await bcrypt.hash(input.password, 10);
    }

    return this.prisma.student.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        username: input.username,
        password: hashedPassword,
        phone: input.phone,
        address: input.address,
        birthDate: input.birthDate,
      },
    });
  }

  async findAll() {
    return this.prisma.student.findMany();
  }

  async findOne(id: number) {
    return this.prisma.student.findUnique({
      where: { id },
    });
  }

  async update(id: number, input: UpdateStudentInput) {
    return this.prisma.student.update({
      where: { id },
      data: input,
    });
  }

  async delete(id: number) {
    return this.prisma.student.delete({
      where: { id },
    });
  }
}

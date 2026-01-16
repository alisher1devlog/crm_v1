import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGroupInput, UpdateGroupInput } from './group.input';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateGroupInput) {
    return this.prisma.group.create({
      data: {
        name: input.name,
        courseId: input.courseId,
        teacherId: input.teacherId,
        startDate: input.startDate,
        endDate: input.endDate,
        schedule: input.schedule,
        maxStudents: input.maxStudents || 20,
      },
      include: { course: true, teacher: true },
    });
  }

  async findAll() {
    return this.prisma.group.findMany({
      include: { course: true, teacher: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.group.findUnique({
      where: { id },
      include: { course: true, teacher: true },
    });
  }

  async update(id: number, input: UpdateGroupInput) {
    return this.prisma.group.update({
      where: { id },
      data: input,
      include: { course: true, teacher: true },
    });
  }

  async delete(id: number) {
    return this.prisma.group.delete({
      where: { id },
    });
  }
}

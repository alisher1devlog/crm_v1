import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateAttendanceInput,
  UpdateAttendanceInput,
} from './attendance.input';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateAttendanceInput) {
    return this.prisma.attendance.create({
      data: {
        lessonId: input.lessonId,
        createdBy: input.createdBy,
        details: {
          create: input.details.map((detail) => ({
            studentId: detail.studentId,
            status: detail.status as any,
            comment: detail.comment,
          })),
        },
      },
      include: {
        lesson: true,
        creator: true,
        details: { include: { student: true } },
      },
    });
  }

  async findAll() {
    return this.prisma.attendance.findMany({
      include: {
        lesson: true,
        creator: true,
        details: { include: { student: true } },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.attendance.findUnique({
      where: { id },
      include: {
        lesson: true,
        creator: true,
        details: { include: { student: true } },
      },
    });
  }

  async delete(id: number) {
    return this.prisma.attendance.delete({
      where: { id },
    });
  }
}

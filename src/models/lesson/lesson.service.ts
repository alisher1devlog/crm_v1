import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLessonInput, UpdateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateLessonInput) {
    return this.prisma.lesson.create({
      data: {
        groupId: input.groupId,
        title: input.title,
        description: input.description,
        lessonDate: input.lessonDate,
        startTime: input.startTime,
        endTime: input.endTime,
        roomNumber: input.roomNumber,
        createdBy: input.createdBy,
      },
      include: { group: true, creator: true },
    });
  }

  async findAll() {
    return this.prisma.lesson.findMany({
      include: { group: true, creator: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id },
      include: { group: true, creator: true },
    });
  }

  async update(id: number, input: UpdateLessonInput) {
    return this.prisma.lesson.update({
      where: { id },
      data: input,
      include: { group: true, creator: true },
    });
  }

  async delete(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}

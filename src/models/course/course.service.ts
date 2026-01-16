import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseInput, UpdateCourseInput } from './course.input';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateCourseInput) {
    return this.prisma.course.create({
      data: {
        name: input.name,
        description: input.description,
        price: input.price,
        duration: input.duration,
        level: input.level as any,
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id: number) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async update(id: number, input: UpdateCourseInput) {
    return this.prisma.course.update({
      where: { id },
      data: input,
    });
  }

  async delete(id: number) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}

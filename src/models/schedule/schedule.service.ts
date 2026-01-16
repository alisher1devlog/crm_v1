import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateScheduleInput, UpdateScheduleInput } from './schedule.input';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateScheduleInput) {
    return this.prisma.schedule.create({
      data: {
        groupId: input.groupId,
        day: input.day as any,
        startTime: input.startTime,
        endTime: input.endTime,
        roomNumber: input.roomNumber,
      },
      include: { group: true },
    });
  }

  async findAll() {
    return this.prisma.schedule.findMany({
      include: { group: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.schedule.findUnique({
      where: { id },
      include: { group: true },
    });
  }

  async update(id: number, input: UpdateScheduleInput) {
    return this.prisma.schedule.update({
      where: { id },
      data: input,
      include: { group: true },
    });
  }

  async delete(id: number) {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }
}

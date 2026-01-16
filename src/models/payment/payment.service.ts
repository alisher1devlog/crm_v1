import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentInput, UpdatePaymentInput } from './payment.input';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreatePaymentInput) {
    return this.prisma.payment.create({
      data: {
        studentId: input.studentId,
        groupId: input.groupId,
        amount: input.amount,
        paymentMethod: input.paymentMethod as any,
        description: input.description,
        receiptNumber: input.receiptNumber,
        createdBy: input.createdBy,
      },
      include: { student: true, group: true, creator: true },
    });
  }

  async findAll() {
    return this.prisma.payment.findMany({
      include: { student: true, group: true, creator: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.payment.findUnique({
      where: { id },
      include: { student: true, group: true, creator: true },
    });
  }

  async update(id: number, input: UpdatePaymentInput) {
    return this.prisma.payment.update({
      where: { id },
      data: input,
      include: { student: true, group: true, creator: true },
    });
  }

  async delete(id: number) {
    return this.prisma.payment.delete({
      where: { id },
    });
  }
}

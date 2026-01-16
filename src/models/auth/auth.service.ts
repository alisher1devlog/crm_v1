import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateStaff(username: string, password: string) {
    const staff = await this.prisma.staff.findUnique({
      where: { username },
    });

    if (staff && (await bcrypt.compare(password, staff.password))) {
      return staff;
    }
    return null;
  }

  async login(staff: any) {
    const payload = {
      sub: staff.id,
      username: staff.username,
      role: staff.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: staff.id,
        username: staff.username,
        firstName: staff.firstName,
        lastName: staff.lastName,
        role: staff.role,
      },
    };
  }

  async validateStudent(username: string, password: string) {
    const student = await this.prisma.student.findUnique({
      where: { username },
    });

    if (
      student &&
      student.password &&
      (await bcrypt.compare(password, student.password))
    ) {
      return student;
    }
    return null;
  }

  async loginStudent(student: any) {
    const payload = { sub: student.id, username: student.username };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: student.id,
        username: student.username,
        firstName: student.firstName,
        lastName: student.lastName,
      },
    };
  }
}

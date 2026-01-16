import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Attendance } from './attendance.model';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceInput } from './attendance.input';

@Resolver(() => Attendance)
export class AttendanceResolver {
  constructor(private attendanceService: AttendanceService) {}

  @Mutation(() => Attendance)
  async createAttendance(@Args('input') input: CreateAttendanceInput) {
    return this.attendanceService.create(input);
  }

  @Query(() => [Attendance])
  async attendances() {
    return this.attendanceService.findAll();
  }

  @Query(() => Attendance, { nullable: true })
  async attendance(@Args('id') id: number) {
    return this.attendanceService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteAttendance(@Args('id') id: number) {
    await this.attendanceService.delete(id);
    return true;
  }
}

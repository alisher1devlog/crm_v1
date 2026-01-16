import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Lesson } from '../lesson/lesson.model';
import { Staff } from '../staff/staff.model';
import { Student } from '../student/student.model';

@ObjectType()
export class AttendanceDetail {
  @Field(() => ID)
  id: number;

  @Field()
  attendanceId: number;

  @Field()
  studentId: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  comment?: string;

  @Field(() => Student, { nullable: true })
  student?: Student;
}

@ObjectType()
export class Attendance {
  @Field(() => ID)
  id: number;

  @Field()
  lessonId: number;

  @Field()
  createdBy: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Lesson, { nullable: true })
  lesson?: Lesson;

  @Field(() => Staff, { nullable: true })
  creator?: Staff;

  @Field(() => [AttendanceDetail], { nullable: true })
  details?: AttendanceDetail[];
}

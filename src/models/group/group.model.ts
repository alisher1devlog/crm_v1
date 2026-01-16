import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Course } from '../course/course.model';
import { Staff } from '../staff/staff.model';

@ObjectType()
export class Group {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  courseId: number;

  @Field()
  teacherId: number;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  schedule?: string;

  @Field()
  maxStudents: number;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Course, { nullable: true })
  course?: Course;

  @Field(() => Staff, { nullable: true })
  teacher?: Staff;
}

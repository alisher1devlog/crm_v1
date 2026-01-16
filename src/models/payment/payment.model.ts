import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Student } from '../student/student.model';
import { Group } from '../group/group.model';
import { Staff } from '../staff/staff.model';

@ObjectType()
export class Payment {
  @Field(() => ID)
  id: number;

  @Field()
  studentId: number;

  @Field()
  groupId: number;

  @Field()
  amount: number;

  @Field()
  paymentDate: Date;

  @Field()
  paymentMethod: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  receiptNumber?: string;

  @Field()
  createdBy: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Student, { nullable: true })
  student?: Student;

  @Field(() => Group, { nullable: true })
  group?: Group;

  @Field(() => Staff, { nullable: true })
  creator?: Staff;
}

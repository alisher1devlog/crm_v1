import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { Staff } from '../staff/staff.model';

@ObjectType()
export class Lesson {
  @Field(() => ID)
  id: number;

  @Field()
  groupId: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  lessonDate: Date;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field({ nullable: true })
  roomNumber?: string;

  @Field()
  createdBy: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Group, { nullable: true })
  group?: Group;

  @Field(() => Staff, { nullable: true })
  creator?: Staff;
}

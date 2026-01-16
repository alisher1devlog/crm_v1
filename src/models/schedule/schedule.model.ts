import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Group } from '../group/group.model';

@ObjectType()
export class Schedule {
  @Field(() => ID)
  id: number;

  @Field()
  groupId: number;

  @Field()
  day: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field({ nullable: true })
  roomNumber?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Group, { nullable: true })
  group?: Group;
}

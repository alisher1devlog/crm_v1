import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  birthDate?: Date;

  @Field()
  status: string;

  @Field()
  enrollmentDate: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

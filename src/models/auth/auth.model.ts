import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthResponse {
  @Field()
  access_token: string;

  @Field()
  user: StaffUser;
}

@ObjectType()
export class StaffUser {
  @Field()
  id: number;

  @Field()
  username: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  role: string;
}

@ObjectType()
export class StudentAuthResponse {
  @Field()
  access_token: string;

  @Field()
  user: StudentUser;
}

@ObjectType()
export class StudentUser {
  @Field()
  id: number;

  @Field()
  username: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

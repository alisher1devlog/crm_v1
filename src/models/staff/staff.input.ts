import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class CreateStaffInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  username: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  role: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  position: string;

  @Field({ nullable: true })
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;
}

@InputType()
export class UpdateStaffInput {
  @Field({ nullable: true })
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  position?: string;

  @Field({ nullable: true })
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;

  @Field({ nullable: true })
  @IsString()
  status?: string;
}

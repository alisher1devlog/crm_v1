import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  username?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  password?: string;

  @Field({ nullable: true })
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;

  @Field({ nullable: true })
  birthDate?: Date;
}

@InputType()
export class UpdateStudentInput {
  @Field({ nullable: true })
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsString()
  address?: string;

  @Field({ nullable: true })
  status?: string;
}

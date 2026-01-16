import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  IsDate,
} from 'class-validator';

@InputType()
export class CreateGroupInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNumber()
  @IsPositive()
  courseId: number;

  @Field()
  @IsNumber()
  @IsPositive()
  teacherId: number;

  @Field()
  @IsNotEmpty()
  startDate: Date;

  @Field({ nullable: true })
  @IsOptional()
  endDate?: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  schedule?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  maxStudents?: number;
}

@InputType()
export class UpdateGroupInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  schedule?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  maxStudents?: number;

  @Field({ nullable: true })
  @IsString()
  status?: string;

  @Field({ nullable: true })
  endDate?: Date;
}

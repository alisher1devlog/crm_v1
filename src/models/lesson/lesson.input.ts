import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @IsNumber()
  @IsPositive()
  groupId: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field()
  @IsNotEmpty()
  lessonDate: Date;

  @Field()
  @IsNotEmpty()
  startTime: Date;

  @Field()
  @IsNotEmpty()
  endTime: Date;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  roomNumber?: string;

  @Field()
  @IsNumber()
  @IsPositive()
  createdBy: number;
}

@InputType()
export class UpdateLessonInput {
  @Field({ nullable: true })
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field({ nullable: true })
  lessonDate?: Date;

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  endTime?: Date;

  @Field({ nullable: true })
  @IsString()
  roomNumber?: string;
}

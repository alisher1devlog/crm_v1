import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

@InputType()
export class AttendanceDetailInput {
  @Field()
  @IsNumber()
  @IsPositive()
  studentId: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  status: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  comment?: string;
}

@InputType()
export class CreateAttendanceInput {
  @Field()
  @IsNumber()
  @IsPositive()
  lessonId: number;

  @Field()
  @IsNumber()
  @IsPositive()
  createdBy: number;

  @Field(() => [AttendanceDetailInput])
  details: AttendanceDetailInput[];
}

@InputType()
export class UpdateAttendanceInput {
  @Field(() => [AttendanceDetailInput], { nullable: true })
  details?: AttendanceDetailInput[];
}

import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateScheduleInput {
  @Field()
  @IsNumber()
  @IsPositive()
  groupId: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  day: string;

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
}

@InputType()
export class UpdateScheduleInput {
  @Field({ nullable: true })
  @IsString()
  day?: string;

  @Field({ nullable: true })
  startTime?: Date;

  @Field({ nullable: true })
  endTime?: Date;

  @Field({ nullable: true })
  @IsString()
  roomNumber?: string;
}

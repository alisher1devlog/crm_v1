import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateCourseInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field()
  @IsNumber()
  @IsPositive()
  price: number;

  @Field()
  @IsNumber()
  @IsPositive()
  duration: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  level?: string;
}

@InputType()
export class UpdateCourseInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  price?: number;

  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  duration?: number;

  @Field({ nullable: true })
  @IsString()
  level?: string;

  @Field({ nullable: true })
  isActive?: boolean;
}

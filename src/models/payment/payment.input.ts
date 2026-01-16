import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreatePaymentInput {
  @Field()
  @IsNumber()
  @IsPositive()
  studentId: number;

  @Field()
  @IsNumber()
  @IsPositive()
  groupId: number;

  @Field()
  @IsNumber()
  @IsPositive()
  amount: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  receiptNumber?: string;

  @Field()
  @IsNumber()
  @IsPositive()
  createdBy: number;
}

@InputType()
export class UpdatePaymentInput {
  @Field({ nullable: true })
  @IsNumber()
  @IsPositive()
  amount?: number;

  @Field({ nullable: true })
  @IsString()
  paymentMethod?: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsString()
  receiptNumber?: string;
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';
import { CreatePaymentInput, UpdatePaymentInput } from './payment.input';

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private paymentService: PaymentService) {}

  @Mutation(() => Payment)
  async createPayment(@Args('input') input: CreatePaymentInput) {
    return this.paymentService.create(input);
  }

  @Query(() => [Payment])
  async payments() {
    return this.paymentService.findAll();
  }

  @Query(() => Payment, { nullable: true })
  async payment(@Args('id') id: number) {
    return this.paymentService.findOne(id);
  }

  @Mutation(() => Payment)
  async updatePayment(
    @Args('id') id: number,
    @Args('input') input: UpdatePaymentInput,
  ) {
    return this.paymentService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deletePayment(@Args('id') id: number) {
    await this.paymentService.delete(id);
    return true;
  }
}

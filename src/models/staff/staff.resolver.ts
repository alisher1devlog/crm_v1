import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Staff } from './staff.model';
import { StaffService } from './staff.service';
import { CreateStaffInput, UpdateStaffInput } from './staff.input';

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private staffService: StaffService) {}

  @Mutation(() => Staff)
  async createStaff(@Args('input') input: CreateStaffInput) {
    return this.staffService.create(input);
  }

  @Query(() => [Staff])
  async staffs() {
    return this.staffService.findAll();
  }

  @Query(() => Staff, { nullable: true })
  async staff(@Args('id') id: number) {
    return this.staffService.findOne(id);
  }

  @Mutation(() => Staff)
  async updateStaff(
    @Args('id') id: number,
    @Args('input') input: UpdateStaffInput,
  ) {
    return this.staffService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteStaff(@Args('id') id: number) {
    await this.staffService.delete(id);
    return true;
  }
}

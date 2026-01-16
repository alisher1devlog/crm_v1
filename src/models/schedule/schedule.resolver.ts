import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schedule } from './schedule.model';
import { ScheduleService } from './schedule.service';
import { CreateScheduleInput, UpdateScheduleInput } from './schedule.input';

@Resolver(() => Schedule)
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}

  @Mutation(() => Schedule)
  async createSchedule(@Args('input') input: CreateScheduleInput) {
    return this.scheduleService.create(input);
  }

  @Query(() => [Schedule])
  async schedules() {
    return this.scheduleService.findAll();
  }

  @Query(() => Schedule, { nullable: true })
  async schedule(@Args('id') id: number) {
    return this.scheduleService.findOne(id);
  }

  @Mutation(() => Schedule)
  async updateSchedule(
    @Args('id') id: number,
    @Args('input') input: UpdateScheduleInput,
  ) {
    return this.scheduleService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteSchedule(@Args('id') id: number) {
    await this.scheduleService.delete(id);
    return true;
  }
}

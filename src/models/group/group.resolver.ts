import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Group } from './group.model';
import { GroupService } from './group.service';
import { CreateGroupInput, UpdateGroupInput } from './group.input';

@Resolver(() => Group)
export class GroupResolver {
  constructor(private groupService: GroupService) {}

  @Mutation(() => Group)
  async createGroup(@Args('input') input: CreateGroupInput) {
    return this.groupService.create(input);
  }

  @Query(() => [Group])
  async groups() {
    return this.groupService.findAll();
  }

  @Query(() => Group, { nullable: true })
  async group(@Args('id') id: number) {
    return this.groupService.findOne(id);
  }

  @Mutation(() => Group)
  async updateGroup(
    @Args('id') id: number,
    @Args('input') input: UpdateGroupInput,
  ) {
    return this.groupService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteGroup(@Args('id') id: number) {
    await this.groupService.delete(id);
    return true;
  }
}

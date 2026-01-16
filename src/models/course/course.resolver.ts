import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { CreateCourseInput, UpdateCourseInput } from './course.input';

@Resolver(() => Course)
export class CourseResolver {
  constructor(private courseService: CourseService) {}

  @Mutation(() => Course)
  async createCourse(@Args('input') input: CreateCourseInput) {
    return this.courseService.create(input);
  }

  @Query(() => [Course])
  async courses() {
    return this.courseService.findAll();
  }

  @Query(() => Course, { nullable: true })
  async course(@Args('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Mutation(() => Course)
  async updateCourse(
    @Args('id') id: number,
    @Args('input') input: UpdateCourseInput,
  ) {
    return this.courseService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Args('id') id: number) {
    await this.courseService.delete(id);
    return true;
  }
}

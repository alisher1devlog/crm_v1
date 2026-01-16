import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Lesson } from './lesson.model';
import { LessonService } from './lesson.service';
import { CreateLessonInput, UpdateLessonInput } from './lesson.input';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Mutation(() => Lesson)
  async createLesson(@Args('input') input: CreateLessonInput) {
    return this.lessonService.create(input);
  }

  @Query(() => [Lesson])
  async lessons() {
    return this.lessonService.findAll();
  }

  @Query(() => Lesson, { nullable: true })
  async lesson(@Args('id') id: number) {
    return this.lessonService.findOne(id);
  }

  @Mutation(() => Lesson)
  async updateLesson(
    @Args('id') id: number,
    @Args('input') input: UpdateLessonInput,
  ) {
    return this.lessonService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteLesson(@Args('id') id: number) {
    await this.lessonService.delete(id);
    return true;
  }
}

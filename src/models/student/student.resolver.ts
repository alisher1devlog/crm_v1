import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { CreateStudentInput, UpdateStudentInput } from './student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation(() => Student)
  async createStudent(@Args('input') input: CreateStudentInput) {
    return this.studentService.create(input);
  }

  @Query(() => [Student])
  async students() {
    return this.studentService.findAll();
  }

  @Query(() => Student, { nullable: true })
  async student(@Args('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  async updateStudent(
    @Args('id') id: number,
    @Args('input') input: UpdateStudentInput,
  ) {
    return this.studentService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteStudent(@Args('id') id: number) {
    await this.studentService.delete(id);
    return true;
  }
}

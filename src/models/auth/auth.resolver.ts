import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse, StudentAuthResponse } from './auth.model';
import { LoginInput } from './auth.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: LoginInput) {
    const staff = await this.authService.validateStaff(
      input.username,
      input.password,
    );
    if (!staff) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(staff);
  }

  @Mutation(() => StudentAuthResponse)
  async studentLogin(@Args('input') input: LoginInput) {
    const student = await this.authService.validateStudent(
      input.username,
      input.password,
    );
    if (!student) {
      throw new Error('Invalid credentials');
    }
    return this.authService.loginStudent(student);
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { PrismaModule } from './models/prisma/prisma.module';
import { StaffModule } from './models/staff/staff.module';
import { StudentModule } from './models/student/student.module';
import { CourseModule } from './models/course/course.module';
import { GroupModule } from './models/group/group.module';
import { LessonModule } from './models/lesson/lesson.module';
import { PaymentModule } from './models/payment/payment.module';
import { AttendanceModule } from './models/attendance/attendance.module';
import { ScheduleModule } from './models/schedule/schedule.module';
import { AuthModule } from './models/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
    }),
    PrismaModule,
    AuthModule,
    StaffModule,
    StudentModule,
    CourseModule,
    GroupModule,
    LessonModule,
    PaymentModule,
    AttendanceModule,
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

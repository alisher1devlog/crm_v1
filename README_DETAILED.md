# CRM GraphQL API

A comprehensive CRM system built with NestJS and GraphQL.

## Features

- **Authentication**: JWT-based authentication for staff and students
- **Staff Management**: Create and manage staff members with different roles
- **Student Management**: Manage student enrollment and information
- **Course Management**: Create and manage courses with different levels
- **Group Management**: Create and manage course groups with teachers
- **Lesson Management**: Schedule and manage lessons for groups
- **Attendance Tracking**: Track student attendance for lessons
- **Payment Management**: Record and track student payments
- **Schedule Management**: Manage class schedules for groups

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

```bash
$ npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/crm_db"
JWT_SECRET="your-secret-key"
NODE_ENV="development"
PORT=3000
```

## Database Setup

Run Prisma migrations to setup the database schema:

```bash
$ npx prisma migrate dev
```

To seed the database with initial data:

```bash
$ npx prisma db seed
```

## Running the Application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The GraphQL API will be available at `http://localhost:3000/graphql`

## API Documentation

The GraphQL schema is automatically generated and includes all available queries and mutations.

### Authentication

Login with staff credentials:

```graphql
mutation {
  login(input: { username: "superadmin", password: "admin123" }) {
    access_token
    user {
      id
      username
      firstName
      lastName
      role
    }
  }
}
```

Default credentials:
- **Username**: superadmin
- **Password**: admin123

### Staff Management

```graphql
query {
  staffs {
    id
    firstName
    lastName
    username
    role
    position
    status
  }
}

mutation {
  createStaff(input: {
    firstName: "John"
    lastName: "Doe"
    username: "johndoe"
    password: "password123"
    role: "TEACHER"
    position: "English Teacher"
    phone: "+998901234567"
    address: "Tashkent"
  }) {
    id
    firstName
    lastName
  }
}
```

### Student Management

```graphql
query {
  students {
    id
    firstName
    lastName
    phone
    status
  }
}

mutation {
  createStudent(input: {
    firstName: "Alice"
    lastName: "Smith"
    phone: "+998907654321"
    address: "Tashkent"
  }) {
    id
    firstName
    lastName
  }
}
```

### Course Management

```graphql
query {
  courses {
    id
    name
    description
    price
    duration
    level
    isActive
  }
}

mutation {
  createCourse(input: {
    name: "English Basics"
    description: "Learn English from scratch"
    price: 500000
    duration: 3
    level: "BEGINNER"
  }) {
    id
    name
    price
  }
}
```

### Group Management

```graphql
query {
  groups {
    id
    name
    status
    maxStudents
    course {
      name
    }
    teacher {
      firstName
      lastName
    }
  }
}

mutation {
  createGroup(input: {
    name: "Group A"
    courseId: 1
    teacherId: 1
    startDate: "2024-01-15"
    maxStudents: 20
  }) {
    id
    name
  }
}
```

## Project Structure

```
crm_v1/
├── src/
│   ├── models/
│   │   ├── attendance/
│   │   ├── auth/
│   │   ├── course/
│   │   ├── group/
│   │   ├── lesson/
│   │   ├── payment/
│   │   ├── prisma/
│   │   ├── schedule/
│   │   ├── staff/
│   │   └── student/
│   ├── common/
│   │   ├── decorators/
│   │   ├── enums/
│   │   ├── filters/
│   │   ├── guards/
│   │   └── types/
│   ├── config/
│   ├── app.module.ts
│   └── main.ts
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── .env
├── package.json
└── README.md
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database Schema

The application uses Prisma ORM with PostgreSQL. The main entities are:

- **Staff**: Users with roles (SUPER_ADMIN, ADMIN, USER, TEACHER)
- **Student**: Student records with enrollment information
- **Course**: Course definitions with pricing and level
- **Group**: Course groups with teacher and schedule
- **StudentGroup**: Junction table for students in groups
- **Lesson**: Individual lessons scheduled for groups
- **Attendance**: Attendance records with attendance details
- **AttendanceDetail**: Individual student attendance status
- **Payment**: Student payment records
- **Schedule**: Weekly schedule for groups

## License

This project is licensed under the UNLICENSED license.

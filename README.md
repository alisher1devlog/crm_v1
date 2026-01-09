<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

  # O'quv markazi boshqaruv tizimi API dokumentatsiyasi

  ## Ma'lumotlar bazasi strukturasi (PostgreSQL jadvallar)

  ### 1. Staffs (Xodimlar)
  ```sql
  CREATE TABLE staffs (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('superadmin', 'admin', 'teacher')),
    position VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    hire_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 2. Students (O'quvchilar)
  ```sql
  CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    birth_date DATE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'graduated')),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 3. Courses (Kurslar)
  ```sql
  CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    level VARCHAR(20) CHECK (level IN ('beginner', 'intermediate', 'advanced')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 4. Groups (Guruhlar)
  ```sql
  CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    course_id INTEGER REFERENCES courses(id),
    teacher_id INTEGER REFERENCES staffs(id),
    start_date DATE NOT NULL,
    end_date DATE,
    schedule TEXT,
    max_students INTEGER DEFAULT 20,
    status VARCHAR(20) DEFAULT 'planned' CHECK (status IN ('planned', 'active', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 5. Student_Groups (O'quvchilar va Guruhlar bog'lanishi)
  ```sql
  CREATE TABLE student_groups (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id),
    group_id INTEGER REFERENCES groups(id),
    join_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, group_id)
  );
  ```

  ### 6. Lessons (Darslar)
  ```sql
  CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups(id),
    title VARCHAR(255),
    description TEXT,
    lesson_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    room_number VARCHAR(20),
    created_by INTEGER REFERENCES staffs(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 7. Attendance (Davomat)
  ```sql
  CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    lesson_id INTEGER REFERENCES lessons(id),
    created_by INTEGER REFERENCES staffs(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE attendance_details (
    id SERIAL PRIMARY KEY,
    attendance_id INTEGER REFERENCES attendance(id),
    student_id INTEGER REFERENCES students(id),
    status VARCHAR(20) CHECK (status IN ('present', 'absent', 'late')),
    comment TEXT,
    UNIQUE(attendance_id, student_id)
  );
  ```

  ### 9. Payments (To'lovlar)
  ```sql
  CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id),
    group_id INTEGER REFERENCES groups(id),
    amount INTEGER NOT NULL,
    payment_date DATE DEFAULT CURRENT_DATE,
    payment_method VARCHAR(20) CHECK (payment_method IN ('cash', 'card', 'transfer')),
    description TEXT,
    receipt_number VARCHAR(50),
    created_by INTEGER REFERENCES staffs(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

  ### 10. Schedule (Dars jadvali)
  ```sql
  CREATE TABLE schedule (
    id SERIAL PRIMARY KEY,
    group_id INTEGER REFERENCES groups(id),
    day VARCHAR(10) CHECK (day IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    room_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(group_id, day, start_time)
  );
  ```

  ## Foydalanuvchi rollari

  - **SuperAdmin**: Default tizimda bo'ladi, barcha huquqlarga ega
  - **Admin**: Markaz administratori, aksariyat funksiyalarni boshqarish huquqiga ega
  - **Teacher**: O'qituvchi, o'z guruhlari bilan ishlash huquqiga ega
  - **Student**: O'quvchi, o'z ma'lumotlarini ko'rish huquqiga ega

  ## API Endpoints

  ### 1. Authentication

  #### Xodim sifatida tizimga kirish
  **POST /api/auth/staff/login**
  - Body:
    ```json
    {
      "username": "alisher",
      "password": "password123"
    }
    ```
  - Response (200):
    ```json
    {
      "success": true,
      "token": "jwt_token_here",
      "staff": {
        "id": "staff_id",
        "firstName": "Alisher",
        "lastName": "Alimov",
        "username": "alisher",
        "role": "admin",
        "position": "Administrator"
      }
    }
    ```

  #### O'quvchi sifatida tizimga kirish
  **POST /api/auth/student/login**
  - Body:
    ```json
    {
      "username": "aziz",
      "password": "password123"
    }
    ```
  - Response (200):
    ```json
    {
      "success": true,
      "token": "jwt_token_here",
      "student": {
        "id": "student_id",
        "firstName": "Aziz",
        "lastName": "Ismoilov",
        "username": "aziz"
      }
    }
    ```

  ### 2. Staffs

  #### Yangi xodim yaratish
  **POST /api/staffs** (SuperAdmin, Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "firstName": "Mansur",
      "lastName": "Karimov",
      "username": "mansur",
      "password": "password123",
      "role": "teacher",
      "position": "O'qituvchi",
      "phone": "+998901234567",
      "address": "Toshkent, Chilonzor"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "staff": {
        "id": "staff_id",
        "firstName": "Mansur",
        "lastName": "Karimov",
        "username": "mansur",
        "role": "teacher",
        "position": "O'qituvchi",
        "phone": "+998901234567",
        "address": "Toshkent, Chilonzor",
        "hireDate": "2025-04-13"
      }
    }
    ```

  #### Barcha xodimlarni olish
  **GET /api/staffs** (SuperAdmin, Admin)
  - Headers: Authorization: Bearer {token}
  - Response (200):
    ```json
    {
      "success": true,
      "count": 5,
      "staffs": [
        {
          "id": "staff_id",
          "firstName": "Mansur",
          "lastName": "Karimov",
          "username": "mansur",
          "role": "teacher",
          "position": "O'qituvchi",
          "phone": "+998901234567",
          "hireDate": "2025-04-13"
        },
      ]
    }
    ```

  ### 3. Students

  #### Yangi o'quvchi yaratish
  **POST /api/students** (Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "firstName": "Aziz",
      "lastName": "Ismoilov",
      "username": "aziz",
      "password": "password123",
      "phone": "+998901234567",
      "address": "Toshkent, Yunusobod",
      "birthDate": "2000-05-15"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "student": {
        "id": "student_id",
        "firstName": "Aziz",
        "lastName": "Ismoilov",
        "username": "aziz",
        "phone": "+998901234567",
        "address": "Toshkent, Yunusobod",
        "birthDate": "2000-05-15",
        "enrollmentDate": "2025-04-13"
      }
    }
    ```

  #### Barcha o'quvchilarni olish
  **GET /api/students** (Admin, Teacher)
  - Headers: Authorization: Bearer {token}
  - Response (200):
    ```json
    {
      "success": true,
      "count": 15,
      "students": [
        {
          "id": "student_id",
          "firstName": "Aziz",
          "lastName": "Ismoilov",
          "username": "aziz",
          "phone": "+998901234567",
          "enrollmentDate": "2025-04-13"
        },
      ]
    }
    ```

  ### 4. Teachers

  #### Yangi o'qituvchi yaratish
  **POST /api/teachers** (Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "staffId": "staff_id",
      "specialization": "Web dasturlash",
      "education": "Oliy",
      "experience": 5
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "teacher": {
        "id": "teacher_id",
        "staff": {
          "id": "staff_id",
          "firstName": "Mansur",
          "lastName": "Karimov"
        },
        "specialization": "Web dasturlash",
        "education": "Oliy",
        "experience": 5
      }
    }
    ```

  ### 5. Courses

  #### Yangi kurs yaratish
  **POST /api/courses** (Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "name": "Web dasturlash",
      "description": "JavaScript, NodeJS va Express o'rganish kursi",
      "price": 500000,
      "duration": 3,
      "level": "intermediate"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "course": {
        "id": "course_id",
        "name": "Web dasturlash",
        "description": "JavaScript, NodeJS va Express o'rganish kursi",
        "price": 500000,
        "duration": 3,
        "level": "intermediate",
        "isActive": true
      }
    }
    ```

  ### 6. Groups

  #### Yangi guruh yaratish
  **POST /api/groups** (Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "name": "WD-25",
      "courseId": "course_id",
      "teacherId": "teacher_id",
      "startDate": "2025-05-01",
      "schedule": "Dushanba, Chorshanba, Juma 18:00-20:00",
      "maxStudents": 15
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "group": {
        "id": "group_id",
        "name": "WD-25",
        "course": {
          "id": "course_id",
          "name": "Web dasturlash"
        },
        "teacher": {
          "id": "teacher_id",
          "staff": {
            "firstName": "Mansur",
            "lastName": "Karimov"
          }
        },
        "startDate": "2025-05-01",
        "schedule": "Dushanba, Chorshanba, Juma 18:00-20:00",
        "maxStudents": 15,
        "status": "planned"
      }
    }
    ```

  ### 7. Lessons

  #### Yangi dars yaratish
  **POST /api/lessons** (Admin, Teacher)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "groupId": "group_id",
      "title": "JavaScript asoslari",
      "description": "JavaScript dasturlash tilining asosiy tushunchalari",
      "lessonDate": "2025-05-05",
      "startTime": "18:00",
      "endTime": "20:00",
      "roomNumber": "204"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "lesson": {
        "id": "lesson_id",
        "group": {
          "id": "group_id",
          "name": "WD-25"
        },
        "title": "JavaScript asoslari",
        "description": "JavaScript dasturlash tilining asosiy tushunchalari",
        "lessonDate": "2025-05-05",
        "startTime": "18:00",
        "endTime": "20:00",
        "roomNumber": "204"
      }
    }
    ```

  #### Guruh darslarini olish
  **GET /api/groups/:groupId/lessons** (Admin, Teacher, Student)
  - Headers: Authorization: Bearer {token}
  - Query: ?startDate=2025-05-01&endDate=2025-05-31
  - Response (200):
    ```json
    {
      "success": true,
      "lessons": [
        {
          "id": "lesson_id",
          "title": "JavaScript asoslari",
          "description": "JavaScript dasturlash tilining asosiy tushunchalari",
          "lessonDate": "2025-05-05",
          "startTime": "18:00",
          "endTime": "20:00",
          "roomNumber": "204",
          "attendance": {
            "total": 15,
            "present": 12,
            "absent": 2,
            "late": 1
          }
        },
        // ...boshqa darslar
      ]
    }
    ```

  ### 8. Attendance

  #### Davomat kiritish
  **POST /api/lessons/:lessonId/attendance** (Admin, Teacher)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "attendances": [
        {
          "studentId": "student_id1",
          "status": "present"
        },
        {
          "studentId": "student_id2",
          "status": "absent",
          "comment": "Sababli"
        },
        {
          "studentId": "student_id3",
          "status": "late",
          "comment": "15 daqiqa kech qoldi"
        }
        // ...guruh o'quvchilari uchun
      ]
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "message": "Davomat muvaffaqiyatli saqlandi",
      "lesson": {
        "id": "lesson_id",
        "title": "JavaScript asoslari",
        "lessonDate": "2025-05-05"
      },
      "attendanceCount": 15,
      "present": 12,
      "absent": 2,
      "late": 1
    }
    ```

  #### Dars davomatini olish
  **GET /api/lessons/:lessonId/attendance** (Admin, Teacher, Student)
  - Headers: Authorization: Bearer {token}
  - Response (200):
    ```json
    {
      "success": true,
      "lesson": {
        "id": "lesson_id",
        "title": "JavaScript asoslari",
        "lessonDate": "2025-05-05",
        "group": {
          "id": "group_id",
          "name": "WD-25"
        }
      },
      "attendance": {
        "total": 15,
        "present": 12,
        "absent": 2,
        "late": 1,
        "students": [
          {
            "student": {
              "id": "student_id1",
              "firstName": "Aziz",
              "lastName": "Ismoilov"
            },
            "status": "present"
          },
          {
            "student": {
              "id": "student_id2",
              "firstName": "Bobur",
              "lastName": "Sodiqov"
            },
            "status": "absent",
            "comment": "Sababli"
          },
          {
            "student": {
              "id": "student_id3",
              "firstName": "Jasur",
              "lastName": "Hamidov"
            },
            "status": "late",
            "comment": "15 daqiqa kech qoldi"
          }
          // ...guruh o'quvchilari
        ]
      }
    }
    ```

  #### O'quvchi davomatini olish
  **GET /api/students/:studentId/attendance** (Admin, Teacher, Student)
  - Headers: Authorization: Bearer {token}
  - Query: ?startDate=2025-05-01&endDate=2025-05-31&groupId=group_id
  - Response (200):
    ```json
    {
      "success": true,
      "student": {
        "id": "student_id",
        "firstName": "Aziz",
        "lastName": "Ismoilov"
      },
      "attendance": {
        "totalLessons": 10,
        "present": 8,
        "absent": 1,
        "late": 1,
        "presentPercentage": 80,
        "lessons": [
          {
            "lesson": {
              "id": "lesson_id1",
              "title": "JavaScript asoslari",
              "lessonDate": "2025-05-05",
              "group": {
                "id": "group_id",
                "name": "WD-25"
              }
            },
            "status": "present"
          },
          {
            "lesson": {
              "id": "lesson_id2",
              "title": "DOM bilan ishlash",
              "lessonDate": "2025-05-07",
              "group": {
                "id": "group_id",
                "name": "WD-25"
              }
            },
            "status": "absent",
            "comment": "Sababli"
          }
          // ...boshqa darslar
        ]
      }
    }
    ```

  ### 9. Payments

  #### To'lov kiritish
  **POST /api/payments** (Admin)
  - Headers: Authorization: Bearer {token}
  - Body:
    ```json
    {
      "studentId": "student_id",
      "groupId": "group_id",
      "amount": 500000,
      "paymentDate": "2025-05-01",
      "paymentMethod": "cash",
      "description": "May oyi uchun to'lov"
    }
    ```
  - Response (201):
    ```json
    {
      "success": true,
      "payment": {
        "id": "payment_id",
        "student": {
          "id": "student_id",
          "firstName": "Aziz",
          "lastName": "Ismoilov"
        },
        "group": {
          "id": "group_id",
          "name": "WD-25"
        },
        "amount": 500000,
        "paymentDate": "2025-05-01",
        "paymentMethod": "cash",
        "description": "May oyi uchun to'lov"
      }
    }
    ```

  ## Authorization va Middleware

  Barcha API endpointlari (umummiy endpointlar bundan mustasno) JWT token orqali autentifikatsiya va avtorizatsiya qilinadi. Token HTTP headerda "Authorization: Bearer {token}" ko'rinishida yuboriladi.

  ### Middleware funksiyalari:
  - `auth` - Foydalanuvchini token orqali tekshiradi
  - `authorize` - Foydalanuvchi rollarini tekshiradi (SuperAdmin, Admin, Teacher, Student)

  Bu loyiha o'quv markazlari uchun asosiy va zarur bo'lgan funksionallikni ta'minlaydi. Loyihani kerakli talablarga ko'ra sozlash va kengaytirish mumkin.


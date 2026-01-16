# Quick Start Guide

## 1️⃣ Setup Environment

Create `.env` file in the root directory:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/crm_db"
JWT_SECRET="your-secret-key-here"
NODE_ENV="development"
PORT=3000
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Setup Database

Make sure PostgreSQL is running, then:

```bash
# Create database and run migrations
npx prisma migrate dev --name init

# Seed with initial admin user
npx prisma db seed
```

## 4️⃣ Start the Server

```bash
# Development mode (with hot reload)
npm run start:dev

# Or production mode
npm run build
npm start
```

## 5️⃣ Access GraphQL API

Open your browser and go to:
```
http://localhost:3000/graphql
```

## 6️⃣ Login with Admin Account

Use this mutation to get your JWT token:

```graphql
mutation {
  login(input: { 
    username: "superadmin" 
    password: "admin123" 
  }) {
    access_token
    user {
      id
      username
      firstName
      role
    }
  }
}
```

Then add the token to the Authorization header:
```
Authorization: Bearer <your_access_token>
```

## 📚 Common Tasks

### Create a Course
```graphql
mutation {
  createCourse(input: {
    name: "Mathematics"
    price: 500000
    duration: 6
    level: "BEGINNER"
  }) {
    id
    name
  }
}
```

### Create a Group
```graphql
mutation {
  createGroup(input: {
    name: "Math Group A"
    courseId: 1
    teacherId: 1
    startDate: "2024-01-15"
  }) {
    id
    name
  }
}
```

### Add a Student
```graphql
mutation {
  createStudent(input: {
    firstName: "John"
    lastName: "Doe"
    phone: "+998901234567"
  }) {
    id
    firstName
  }
}
```

### Get All Data
```graphql
query {
  courses { id name price }
  groups { id name status }
  students { id firstName lastName }
  staffs { id firstName role }
}
```

## 🐛 Troubleshooting

**"Cannot find database"**
- Create PostgreSQL database first: `createdb crm_db`
- Update DATABASE_URL in .env

**"Connection refused"**
- Start PostgreSQL service
- Check if port 3000 is available

**"Module not found"**
- Run `npm install` again
- Clear node_modules: `rm -rf node_modules && npm install`

**"GraphQL endpoint not found"**
- Ensure server is running on port 3000
- Check browser console for errors

## 📖 Learn More

See `IMPLEMENTATION_GUIDE.md` for detailed documentation and advanced examples.

## 🎯 What's Next?

1. Add more authentication guards for protected resolvers
2. Implement custom validators
3. Add error handling filters
4. Setup logging middleware
5. Add pagination and filtering
6. Implement caching strategy
7. Add API documentation (Swagger/Introspection)
8. Setup testing suite
9. Configure CI/CD pipeline
10. Deploy to production

---

Happy coding! 🚀

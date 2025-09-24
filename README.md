Here’s a clean, simple **`README.md`** you can drop into your project right away:

````markdown
# Route Management System

A simple route and driver management system built with **NestJS** and **Prisma ORM**.  
This API allows you to manage drivers, routes, and schedules.

---

## Tech Stack

* [NestJS] – A modular and scalable structure for building maintainable APIs.
* [PostgreSQL] – Strong relational modeling, data integrity, and efficient handling of complex queries.
* [Prisma] – Simplifies database access with type-safe queries and migrations.

---
## How to Install

```bash
# Clone the repository
git clone https://github.com/your-username/route-management.git

cd route-management

# Install dependencies
npm install
````

---

## Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/route_management"
PORT=3000
```

---

## Running the App

```bash
# Start the database migrations
npx prisma migrate dev

# Run in development
npm run start:dev

# Run in production
npm run build && npm run start:prod
```

---

## API Endpoints

### Drivers

* `POST /drivers` → Create a new driver
* `GET /drivers/:id/history` → Get driver’s route history

### Routes

* `POST /routes` → Create a new route
* `GET /routes` → List all routes

### Schedule

* `GET /schedule` → View schedule



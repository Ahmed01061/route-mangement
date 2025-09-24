# Route Management System

A simple route and driver management system built with **NestJS** and **Prisma ORM**.  
This API allows you to manage drivers, routes, and schedules.

---

## Tech Stack

- **NestJS**: A modular and scalable framework for building maintainable APIs.
- **PostgreSQL**: A powerful relational database management system, ideal for data integrity and handling complex queries.
- **Prisma ORM**: Simplifies database access with type-safe queries and migrations.

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/route-management.git
    cd route-management
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

---

## Environment Variables

Create a `.env` file in the project root with the following content:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/route_management"
PORT=3000
```

---

## Running the Application

### Development

To run the application in development mode, use the following commands:

1. Start database migrations:

    ```bash
    npx prisma migrate dev
    ```

2. Start the app:

    ```bash
    npm run start:dev
    ```

### Production

For production mode:

1. Build the project:

    ```bash
    npm run build
    ```

2. Start the app in production:

    ```bash
    npm run start:prod
    ```

---

## API Endpoints

### Drivers

- `POST /drivers`: Create a new driver.
- `GET /drivers/:id/history`: Get the driver’s route history.

### Routes

- `POST /routes`: Create a new route.
- `GET /routes`: List all routes.

### Schedule

- `GET /schedule`: View the current schedule.

---

Feel free to contribute to this project by creating issues or submitting pull requests.

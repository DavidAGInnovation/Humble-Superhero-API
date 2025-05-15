# Humble Superhero API

This repository contains a complete solution for the Humble Superhero API, featuring:

- **Backend API:** A NestJS application using PostgreSQL (via TypeORM) with enhanced DTO validation and error handling. The superhero functionality is modular and ready to be split into microservices.
- **Frontend:** A React application for real‑time interaction (adding and viewing superheroes).
- **Dockerization:** Dockerfiles and a Docker Compose file to containerize the backend, frontend, and database.
- **CI/CD:** A sample GitHub Actions workflow to run tests on every push.

## Features

- **Persistent Database:** Superhero data is stored in PostgreSQL.
- **Dockerization:** Easily build and run the full stack using Docker Compose.
- **Enhanced Validation:** DTOs use `class-validator` with custom error messages.
- **Frontend Integration:** A React app allows users to add superheroes and view an updated list.
- **Microservices Ready:** The superhero module is isolated; it can later be split into its own microservice using NestJS's transport layers.
- **CI/CD:** Automated tests run on GitHub Actions.

## Setup

### Locally (without Docker)

1. **Backend:**
   - Start Docker Desktop app.
   - Navigate to the `backend` folder.
   - Install dependencies:  
     ```bash
     npm install
     ```
   - Create a PostgreSQL database named `superheroes` (or adjust the configuration in `ormconfig.json`/environment variables).
   - Start the backend:  
     ```bash
     npm run start:dev
     ```

2. **Frontend:**
   - Navigate to the `frontend` folder.
   - Install dependencies:  
     ```bash
     npm install
     ```
   - Start the frontend:  
     ```bash
     npm start
     ```
   - The React app will run on [http://localhost:3001](http://localhost:3001) (adjust as needed).

### Using Docker

From the project root, run:

```bash
docker-compose up --build
```

**Backend API:** http://localhost:3000
**Frontend:** http://localhost:8080
**PostgreSQL:** Accessible on port 5432.

**Troubleshooting Database Connection Issues:**

If the application (especially the backend) fails to start due to errors like `ECONNREFUSED`, it likely means it cannot connect to the PostgreSQL database. Ensure that:
1. Your Docker daemon (e.g., Docker Desktop) is running.
2. The database container is running. You can start it (and other services) with `docker-compose up -d`. If you only want to start the database, use `docker-compose up -d db`.
   You can check running containers with `docker ps`.

## Collaboration & Future Improvements

## Team Collaboration

**Code Reviews & Pair Programming:** We'd collaborate closely to review code, suggest improvements, and ensure adherence to coding standards.
**Modular Design:** With clear separation of concerns, team members can work on the backend, frontend, or microservices independently.
**Documentation:** This README and inline comments serve as a starting point for new team members.

## If I Had More Time

**Persistent Messaging / Websockets:** Upgrade the frontend for true real‑time updates using WebSockets or Server‑Sent Events.
**Production‑Ready Database Migrations:** Replace synchronize: true with proper migrations.
**Advanced Error Handling & Logging:** Integrate tools like Sentry or Winston for comprehensive error logging.
**Microservices Architecture:** Extract the superhero functionality into its own microservice (e.g., using RabbitMQ or Kafka for communication).
**Docker Swarm/Kubernetes:** Set up orchestration for scalability and resilience.
**Enhanced CI/CD:** Add end‑to‑end tests and deployment steps in the CI/CD pipeline.
**Frontend Enhancements:** Improve the UI/UX with additional feedback, animations, or integration with other APIs.
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

## Running the Application

There are two main ways to run this application:

### Option 1: Running the Full Stack with Docker (Recommended)

This method runs the frontend, backend, and database in Docker containers. It's the simplest way to get the entire application running.

**Prerequisites:**
- Docker Desktop (or Docker Engine with Docker Compose) installed and running.

**Steps:**
1.  **Clone the repository** (if you haven't already).
2.  **Navigate to the project root directory** in your terminal.
3.  **Build and start all services:**
    ```bash
    docker-compose up --build -d
    ```
    The `-d` flag runs the containers in detached mode (in the background). The first time you run this, Docker will download necessary images and build your application images, which may take a few minutes.
4.  **Access the application:**
    -   Frontend: [http://localhost:8080](http://localhost:8080)
    -   Backend API: [http://localhost:3000](http://localhost:3000)
    -   PostgreSQL database will be accessible on port `5432` to the other Docker containers (and to your host machine if needed).

**To stop all services:**
```bash
docker-compose down
```
This command will stop and remove the containers and the network created by `docker-compose`. Add `-v` if you also want to remove the database volume.

### Option 2: Running Services Locally (for Development)

This setup is useful if you want to actively develop and run the frontend and/or backend locally, while still using the Dockerized database.

**A. Database (Dockerized):**
1.  Ensure Docker Desktop is running.
2.  From the project root directory, start the database service:
    ```bash
    docker-compose up -d db
    ```
    This will start the PostgreSQL database container and make it accessible on `localhost:5432`.

**B. Backend (Local):**
1.  Navigate to the `backend` directory: `cd backend`.
2.  **Dependency Management:**
    -   Ensure your NestJS module versions in `package.json` are compatible. Generally, all `@nestjs/*` packages (including `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/testing`, and `@nestjs/typeorm`) should align on the same major version (e.g., `^11.x.x`).
    -   If you've made significant changes to these versions or encounter dependency issues (`ERESOLVE` errors), delete existing `node_modules` and `package-lock.json`:
        ```bash
        rm -rf node_modules package-lock.json
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
3.  **CORS Configuration:**
    -   Ensure the backend is configured to accept requests from your local frontend's origin. Open `backend/src/main.ts` and verify the `cors` options. For a local frontend running on `http://localhost:3001`, it should look like this:
        ```typescript
        const app = await NestFactory.create(AppModule, {
            cors: {
                origin: ['http://localhost:8080', 'http://localhost:3001'], // Ensure your local frontend origin is listed
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
                allowedHeaders: 'Content-Type, Accept',
                optionsSuccessStatus: 204,
            },
        });
        ```
4.  **Start the backend development server:**
    ```bash
    npm run start:dev
    ```
    The backend API will be available at `http://localhost:3000`.

**C. Frontend (Local):**
1.  Navigate to the `frontend` directory: `cd frontend` (from project root or `cd ../frontend` if you are in `backend`).
2.  **Dependency Management:**
    -   Ensure `react-scripts` in `package.json` is set to a correct version (e.g., `^5.0.1`). An incorrect version like `^0.0.0` will cause issues.
    -   If `react-scripts` version was incorrect or you face issues, delete `node_modules` and `package-lock.json`:
        ```bash
        rm -rf node_modules package-lock.json
        ```
    -   Install dependencies:
        ```bash
        npm install
        ```
3.  **Start the frontend development server:**
    ```bash
    npm start
    ```
    The frontend application will be available at `http://localhost:3001`.

## Common Troubleshooting

Here are solutions to some common issues you might encounter:

-   **`ECONNREFUSED` (Backend unable to connect to Database):**
    -   **Is Docker Running?** Ensure Docker Desktop (or your Docker daemon) is running.
    -   **Is the Database Container Running?** Check with `docker ps`. If `humble-superhero-api-db-1` (or similar) isn't listed, start it from the project root: `docker-compose up -d db`.
    -   **Local Backend Configuration:** If running the backend locally, ensure its database connection settings (e.g., in `.env` or `ormconfig.json`) point to `host: 'localhost'`, `port: 5432`, `username: 'postgres'`, `password: 'postgres'`, `database: 'superheroes'`.

-   **`EADDRINUSE` (Port already in use, e.g., `:::3000`):**
    -   This means another process is already using the port your application needs (usually port 3000 for the backend).
    -   **Identify the process:** Use `sudo lsof -i :<port_number>` (e.g., `sudo lsof -i :3000`).
    -   **Stop the process:** Use `kill -9 <PID>` (replace `<PID>` with the Process ID from the `lsof` output).
    -   It could be a manually started local development server in another terminal, or a stuck Docker container. If you suspect a Docker container, run `docker-compose down` from the project root to stop and remove all project-related containers.

-   **`Failed to fetch` (Frontend cannot reach Backend):**
    -   **Is the Backend Running?** Ensure your backend (whether local or Dockerized) is running and accessible at its expected address (e.g., `http://localhost:3000`). Check its terminal logs for any startup errors.
    -   **CORS Configuration:** This is a common cause. Ensure your backend's CORS policy (in `backend/src/main.ts`) allows requests from your frontend's origin (e.g., `http://localhost:3001` for local frontend, or `http://localhost:8080` for Dockerized frontend).

-   **`react-scripts: command not found` (When running `npm start` in `frontend`):**
    -   This usually means `react-scripts` is not installed correctly or its version is misconfigured.
    -   In `frontend/package.json`, ensure `"react-scripts"` has a valid version, like `"^5.0.1"`. Avoid versions like `"^0.0.0"`.
    -   In the `frontend` directory, delete `node_modules` and `package-lock.json` (`rm -rf node_modules package-lock.json`).
    -   Then, run `npm install` again.

-   **`ERESOLVE` (npm dependency conflicts, often in `backend`):**
    -   These errors mean npm cannot find a set of package versions that satisfy all peer dependencies.
    -   For the NestJS backend, ensure all `@nestjs/*` packages (like `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`, `@nestjs/typeorm`, `@nestjs/testing`) are on compatible major versions (e.g., all `^11.x.x`).
    -   To attempt a clean fix:
        1.  Navigate to the affected directory (`backend` or `frontend`).
        2.  Delete `node_modules` and `package-lock.json` (`rm -rf node_modules package-lock.json`).
        3.  Manually correct the versions in `package.json` as needed.
        4.  Run `npm install`.
    -   **Avoid using `npm audit fix --force`** when dealing with these specific peer dependency issues, as it can sometimes worsen the problem by installing incompatible versions. Address security vulnerabilities separately after the main dependencies are stable.

-   **General Docker Issues:**
    -   **Is Docker Running?** Always ensure Docker Desktop (or your Docker daemon) is active.
    -   **Check Running Containers:** `docker ps -a` (shows all containers, including stopped ones).
    -   **View Container Logs:** `docker-compose logs <service_name>` (e.g., `docker-compose logs backend` or `docker-compose logs db`). This is very helpful for debugging container startup issues.
    -   **Prune System:** If Docker is acting strangely or you suspect old/stuck resources: `docker system prune -a --volumes` (Caution: this removes all unused Docker data, including images, containers, networks, and volumes. Use with care).

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

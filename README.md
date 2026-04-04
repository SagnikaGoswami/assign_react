# React-App Assignment
A responsive web application built using React, focusing on clean UI, responsiveness, and smooth user experience. The project is fully containerized using Docker for easy setup and execution.

## Tech Stack
- React
- Framer Motion (for animations)
- Docker

## Features
- Responsive design across multiple screen sizes
- Clean and modern UI layout
- Basic animations (fade-in, smooth transitions)
- Dockerized setup for consistent environment

## Docker Setup
### 1. Build the Docker image
```
docker build -t my-app
```
### 2. Run the container
```
docker run -p 3000:3000 my-app
```
### 3. Open in browser
http://localhost:3000

> The  React application runs on port 3000 inside the container.
> You can change the external port if needed (e.g., `-p 5000:3000`).

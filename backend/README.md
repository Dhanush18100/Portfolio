# Portfolio Backend

This is the backend server for the portfolio website built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

3. Make sure MongoDB is installed and running on your system.

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Projects
- GET `/api/projects` - Get all projects
- GET `/api/projects/:id` - Get a single project
- POST `/api/projects` - Create a new project
- PUT `/api/projects/:id` - Update a project
- DELETE `/api/projects/:id` - Delete a project

### Messages (Contact Form)
- GET `/api/messages` - Get all messages
- POST `/api/messages` - Create a new message
- DELETE `/api/messages/:id` - Delete a message

## Project Structure
```
backend/
  ├── models/
  │   ├── Project.js
  │   └── Message.js
  ├── routes/
  │   ├── projectRoutes.js
  │   └── messageRoutes.js
  ├── server.js
  └── .env
``` 
# Task Management API

This is a simple task management api built using Node.js, Express, and MongoDB (with Mongoose). The application allows users to manage their tasks effectively by creating, updating, deleting, and viewing tasks. Additionally, users can mark tasks as completed and assign due dates and categories to tasks.

## Features

- Create a new task with a title, description, due date, and category.
- View all tasks.
- View a specific task.
- Update a task.
- Mark a task as completed.
- Delete a task.
- Data persistence using MongoDB.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ritesh9919/task_management.git
   cd folder name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGO_URI=
   PORT=
   ```

### Running the Application

Start the server:

```bash
npm run dev
```

Create a Task
URL: /api/tasks

Method: POST

Body:

```bash
{
  "title": "Complete project report",
  "description": "Finish writing the final report for the project and submit it to the manager.",
  "dueDate": "2024-12-01T17:00:00.000Z",
  "category": "Work"
}

```

Response:

```bash
{
  "_id": "60c72b1f4f1a4c1f4c8b4567",
  "title": "Complete project report",
  "description": "Finish writing the final report for the project and submit it to the manager.",
  "isCompleted": false,
  "dueDate": "2024-12-01T17:00:00.000Z",
  "category": "Work",
  "__v": 0
}

```

Get all Tasks
URL: /api/tasks

Method: GET

Response:

```bash
[
  {
    "_id": "60c72b1f4f1a4c1f4c8b4567",
    "title": "Complete project report",
    "description": "Finish writing the final report for the project and submit it to the manager.",
    "isCompleted": false,
    "dueDate": "2024-12-01T17:00:00.000Z",
    "category": "Work",
    "__v": 0
  }

]
```

Update a Task
URL: /api/tasks/:taskId

Method: PUT

Body:

```bash
{
  "title": "Complete project report",
  "description": "Finish writing the final report for the project and submit it to the manager.",
  "category": "Work"
}
```

Response:

```bash
{
  "_id": "60c72b1f4f1a4c1f4c8b4567",
  "title": "Complete project report",
  "description": "Finish writing the final report for the project and submit it to the manager.",
  "isCompleted": false,
  "dueDate": "2024-12-01T17:00:00.000Z",
  "category": "Work",
  "__v": 0
}
```

Delete a Task
URL: /api/tasks/:taskId

Method: DELETE

Response:

```bash

  {
    "message":"Task removed"
  }
```

Mark Task AS complete
URL: /api/tasks/:taskId/complete

Method: PUT

Response:

```bash

  {
    "_id": "60c72b1f4f1a4c1f4c8b4567",
    "title": "Complete project report",
    "description": "Finish writing the final report for the project and submit it to the manager.",
    "isCompleted": false,
    "dueDate": "2024-12-01T17:00:00.000Z",
    "category": "Work",
    "__v": 0
  }
```

# Node.js + MongoDB Stack

This directory contains a Node.js REST API backend with a MongoDB database for the Chatbot Scaling Stack Comparison project.

## Overview

- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **API:** RESTful endpoints for chat messages

## Setup

### Prerequisites

- Node.js 16+
- MongoDB 4.4+
- Docker and Docker Compose (optional)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ikigeng/Chatbot-Scaling-Stacks-Comparison.git
   cd Chatbot-Scaling-Stacks-Comparison/node-mongo-stack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Ensure MongoDB is running locally or update `.env` with your MongoDB URI:
     ```
     MONGODB_URI=mongodb://localhost:27017/chat-app
     ```

4. **Run the application:**
   ```bash
   npm start
   ```

### Docker Setup

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

## API Documentation

### Get All Messages

- **Endpoint:** `GET /api/chat`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "message": "Hello!",
      "sender": "Alice",
      "timestamp": "2024-06-01T12:00:00.000Z"
    },
    ...
  ]
  ```

### Post a New Message

- **Endpoint:** `POST /api/chat`
- **Request Body:**
  ```json
  {
    "message": "Hi there!",
    "sender": "Bob"
  }
  ```
- **Response:**
  ```json
  {
    "id": 2,
    "message": "Hi there!",
    "sender": "Bob",
    "timestamp": "2024-06-01T12:01:00.000Z"
  }
  ```

## Testing

- Use the provided Locust script in `stress-testing/locustfile_node.py` to run load tests.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details. 
# Flask + PostgreSQL Stack

This directory contains a Flask REST API backend with a PostgreSQL database for the Chatbot Scaling Stack Comparison project.

## Overview

- **Backend:** Flask (Python)
- **Database:** PostgreSQL
- **API:** RESTful endpoints for chat messages

## Setup

### Prerequisites

- Python 3.9+
- PostgreSQL 13+
- Docker and Docker Compose (optional)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ikigeng/Chatbot-Scaling-Stacks-Comparison.git
   cd Chatbot-Scaling-Stacks-Comparison/flask-postgres-stack
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up PostgreSQL:**
   - Create a database named `chat-app`
   - Update `.env` with your database URL:
     ```
     DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chat-app
     ```

4. **Run the application:**
   ```bash
   python run.py
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

- Use the provided Locust script in `stress-testing/locustfile_flask.py` to run load tests.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details. 
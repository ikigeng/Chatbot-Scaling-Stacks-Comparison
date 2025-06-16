# Frontend (React)

This directory contains the React-based frontend for the Chatbot Scaling Stack Comparison project. It provides a unified interface to interact with both the Flask + PostgreSQL and Node.js + MongoDB backends.

## Overview

- **Framework:** React
- **Features:** Real-time chat interface, backend switching, and message history

## Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ikigeng/Chatbot-Scaling-Stacks-Comparison.git
   cd Chatbot-Scaling-Stacks-Comparison/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Access the frontend:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Switch Backends:** Use the UI buttons to toggle between Flask and Node.js backends.
- **Send Messages:** Enter a message and sender name to post a new message.
- **View History:** Messages are displayed in real-time and refreshed every 5 seconds.

## Integration

- The frontend communicates with the backends via REST API calls:
  - Flask: `http://localhost:5000/api/chat`
  - Node.js: `http://localhost:3000/api/chat`

## Testing

- Run unit tests with:
  ```bash
  npm test
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details. 
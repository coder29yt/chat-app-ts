# Real-Time Chat Application with Typescript

A modern real-time chat application built with TypeScript, React, and Socket.IO.

## Features

- Real-time messaging
- TypeScript support
- Modern React components
- Socket.IO for bidirectional communication
- Clean and intuitive user interface

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.0.0 or higher)
- npm (comes with Node.js)

## How to Use (If Downloaded from GitHub)

### 1. Clone the Repository

```bash
git clone https://github.com/coder29yt/chat-app-ts.git
cd chat-app-ts
```

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

This will start the backend server on `http://localhost:8080`.

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

This will start the React frontend on `http://localhost:5173`.

### 4. Using the Application

- Open `http://localhost:3000` in your browser.
- Enter a username and a chat room to join.
- Start sending messages in real time!

## Project Structure

```
chat-app-ts/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/      # API and service
│   │   ├── assets/       # Static assets
│   │   ├── interfaces.ts  # TypeScript interfaces
│   │   ├── helpers.tsx   # Helper functions
│   │   ├── App.tsx      # Main App component
│   │   └── main.tsx     # Entry point
│   ├── public/          # Public assets
│   ├── package.json     # Frontend dependencies
│   └── tsconfig.json    # TypeScript configuration
│
└── server/              # Node.js backend
    ├── src/
    │   ├── index.ts    # Server entry point
    │   └── interfaces.ts # TypeScript interfaces
    ├── package.json    # Backend dependencies
    └── tsconfig.json   # TypeScript configuration
```

## Tech Stack

### Frontend

- React with TypeScript
- Socket.IO Client
- TailwindCSS

### Backend

- Node.js
- Express
- TypeScript
- Socket.IO

## Setting Up From Scratch

### Project Structure Overview

```
chat-app/
├── client/          # React frontend
└── server/          # Node.js backend
```

### Backend Setup

1. Create the project structure:

   ```bash
   mkdir chat-app
   cd chat-app
   mkdir server
   cd server
   ```

2. Initialize Node.js project and install dependencies:

   ```bash
   npm init -y
   npm install express socket.io cors typescript @types/node @types/express @types/cors ts-node nodemon
   npx tsc --init
   ```

3. Configure TypeScript - Update `server/tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true
     }
   }
   ```

4. Update `package.json` scripts:

   ```json
   {
     "scripts": {
       "start": "node dist/index.js",
       "build": "tsc",
       "dev": "nodemon src/index.ts"
     }
   }
   ```

5. Create `src/index.ts`:

   ```typescript
   import express from "express";
   import { createServer } from "http";
   import { Server } from "socket.io";
   import cors from "cors";
   import dotenv from "dotenv";

   dotenv.config();

   const app = express();
   const httpServer = createServer(app);
   const io = new Server(httpServer, {
     cors: {
       origin: "http://localhost:3000",
       methods: ["GET", "POST"],
     },
   });

   app.use(cors());
   app.use(express.json());

   io.on("connection", (socket) => {
     console.log("User connected:", socket.id);

     socket.on("join_room", (room) => {
       socket.join(room);
       console.log(`User ${socket.id} joined room ${room}`);
     });

     socket.on("send_message", (data) => {
       socket.to(data.room).emit("receive_message", data);
     });

     socket.on("disconnect", () => {
       console.log("User disconnected:", socket.id);
     });
   });

   const PORT = process.env.PORT || 3001;
   httpServer.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

### Frontend Setup

1. Create React application with TypeScript:

   ```bash
   cd ..
   npx create-vite@latest
   project-name -> client
   framework -> React
   language -> Typescript
   cd client 
   ```

2. Install required dependencies:

   ```bash
   npm install socket.io-client @types/socket.io-client
   ```

3. Set up Tailwind CSS:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

4. Configure Tailwind CSS - Update `vite.config.ts`:

   ```javascript
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```

5. Add Tailwind directives to `src/index.css`:
   ```css
   @import "tailwindcss";
   ```

### Running the Application

1. Start the server:

   ```bash
   cd server
   npm run dev
   ```

2. In a new terminal, start the client:
   ```bash
   cd client
   npm start
   ```

The application will be running with:

- Client: http://localhost:5173
- Server: http://localhost:8080

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you have any questions or need help with setup, please open an issue in the repository.

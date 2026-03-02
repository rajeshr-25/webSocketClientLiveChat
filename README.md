🚀 WebSocket Live Chat — Full Project (Client + Server)

A simple real-time chat application using HTML/CSS/JS for the frontend and Node.js + ws for the backend.
Supports multiple users with instant message broadcasting.

📦 Project Structure
websocket-chat/
│
├── client/            ← Frontend (Netlify)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── server/            ← Backend (Render)
    ├── server.js
    └── package.json

Both folders are fully isolated and can be deployed independently.

✨ Features

Real-time messaging

Lightweight and fast

Username prompt

Auto-scroll messages

Clean UI design

Supports unlimited users

Works on Netlify + Render for free

🖥️ Frontend (Client)

The client is built using plain HTML, CSS, and JavaScript.

🔧 Run Locally

Just open:

client/index.html
🛜 WebSocket URL (Local)
const socket = new WebSocket("ws://localhost:3000");
🌐 Deploy to Netlify

Upload the client folder

No build command required

Publish directory: /

Netlify gives a URL like:

https://your-chat-client.netlify.app
⚙️ Backend (Server)

The backend is a Node.js WebSocket broadcast server using the ws library.

🔧 Run Locally
cd server
npm install
node server.js

Local WebSocket URL:

ws://localhost:3000
🛜 Required Code for Render

Render assigns ports dynamically, so your WebSocket server must use:

const server = new WebSocket.Server({
  port: process.env.PORT || 3000
});
🌐 Deploy to Render

Create a new Web Service

Connect your server repo

Set:

Build Command:

npm install

Start Command:

node server.js

Region: Singapore (Asia)

Deploy

Render gives a URL like:

https://your-chat-server.onrender.com
WebSocket URL for Client

In client/script.js, replace:

const socket = new WebSocket("ws://localhost:3000");

with:

const socket = new WebSocket("wss://your-chat-server.onrender.com");
📡 Message Format
{
  "user": "Username",
  "text": "Message content"
}

The server broadcasts each message to all connected clients.

🧰 Technologies Used
Frontend

HTML

CSS

JavaScript

Backend

Node.js

ws (WebSocket library)

Hosting

Netlify (client)

Render (server)

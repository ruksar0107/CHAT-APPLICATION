# CHAT-APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RUKSAR

*INTERN ID*: CT06DF2842

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR* : NEELA SANTOSH

 Real-Time Chat Application Using Socket.IO
This project is a simple and functional real-time chat application built using Node.js, Express, and Socket.IO. The goal of this app is to demonstrate how two or more users can exchange messages instantly without the need to refresh the page. It serves as a practical example of implementing WebSocket communication in web development and can be used as a foundation for more advanced messaging systems.

The application is divided into two main parts: the server-side and the client-side. The server-side is written using Node.js and Express, while the client-side is a basic HTML interface served from the server itself. The real-time communication is handled by Socket.IO, which creates a persistent, event-based connection between the server and all connected clients.

When the application runs, users can open the chat interface in multiple tabs or browsers. Each client connects to the server via Socket.IO. When a user types a message and hits “Send,” the message is sent to the server using a socket.emit call. The server then uses io.emit to broadcast that message to all connected clients, including the one who sent it. This makes the message appear instantly across all open instances of the chat app.

The backend server is located in the server/ folder. It uses Express to serve static files from the client/ folder, which contains the HTML interface. The server also sets up the Socket.IO connection and listens for custom events such as 'chat message' and 'disconnect'. The frontend consists of a simple form input and a message list displayed using <ul> and <li> tags. JavaScript on the client side listens for form submissions and socket events to send and receive messages.

This project uses the following core tools and technologies:

Node.js – to create the backend server

Express.js – to serve the frontend files

Socket.IO – to manage real-time WebSocket communication

HTML & JavaScript – to create the frontend interface

During development, a .gitignore file is used to prevent unnecessary files like node_modules and system settings from being pushed to GitHub. The package.json file defines the project dependencies and can be used to quickly reinstall them using npm install.

This chat application is a great starting point for learning about real-time systems, WebSockets, and backend/frontend integration. It can be enhanced further by adding features like usernames, timestamps, persistent storage (e.g., MongoDB), user authentication, private chat rooms, or improved UI using CSS frameworks.

In summary, this project successfully demonstrates the implementation of a real-time, multi-user chat interface using Socket.IO. It is simple, clean, and ideal for beginners who want to learn how full-stack applications work with real-time communication.

##output

![Image](https://github.com/user-attachments/assets/2b01ef4e-bec9-4e5e-9fdd-23e91eb0cd6f)

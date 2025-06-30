const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from client folder
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
  console.log('User connected');

  // Receive and broadcast chat message
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // broadcast to all clients
    // Or use socket.broadcast.emit(...) to exclude sender
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

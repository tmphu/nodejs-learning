const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);

// socket server object
const io = new Server(httpServer, {
  cors: {
    allowedHeaders: '*',
    origin: '*',
  },
});

// listen for new connection
io.on('connection', (socket) => {
  console.log(socket.id);

  // io: the socket server object
  io.emit('client-connected', socket.id.substring(0, 5));

  // socket: the socket (client) that sent the message
  socket.on('disconnect', (reason) => {
    io.emit('client-disconnected', socket.id.substring(0, 5));
  });

  // listen to action 'send-chat' and send message to all clients
  socket.on('send-chat', (msg) => {
    io.emit('send-chat', { id: socket.id.substring(0, 5), msg });
  });
});

httpServer.listen(8080);

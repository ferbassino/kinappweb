// server.mjs
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Permitir cualquier origen (ajusta según sea necesario)
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado.");

  socket.on("sensorData", (data) => {
    console.log("Datos recibidos del cliente:", data);
    io.emit("sensorData", data); // Reenviar los datos a todos los clientes conectados
  });

  socket.on("disconnect", () => {
    console.log("Un cliente se ha desconectado.");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor de Socket.IO ejecutándose en el puerto ${PORT}`);
});

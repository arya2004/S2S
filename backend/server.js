import express from "express";
import { connectDB } from "./database/database.js";
import bodyparser from "body-parser";
import router from "./routes/router.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"], // Add the HTTP methods you need
    credentials: true, // Allow cookies and HTTP authentication information
  },
});

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", router);

io.on("connection", (socket) => {
  console.log("new socket id:", socket.id);
});

const PORT = process.env.PORT || 4000;

connectDB().then(async () => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

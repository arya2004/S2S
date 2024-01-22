import express from "express";
import { connectDB } from "./database/database.js";
import User from "./models/schema.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from s2s server" });
});

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server running on port:", PORT);
  });
});

app.post("/users", async (req, res) => {
  try{
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
 
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

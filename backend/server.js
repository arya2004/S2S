import express from "express";
import { connectDB } from "./database/database.js";
import User from "./models/schema.js";
import Partner from "./models/partnerSchema.js";
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

// API for users

app.post("/users", async (req, res) => {
  try{
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
 
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.updateOne({_id: id}, req.body);
  const updatedUser = await DocumentFragment.findById(id);
  return res.status(200).json(updatedUser);
});

app.delete("/users/:id", async(req, res) => {
  const {id} = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedUser);
})

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/:id", async(req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
})



// API for delivery partners
app.get("/partner", async (req, res) => {
  try {
    const partners = await Partner.find({});
    res.send(partners);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/partner/:id", async(req, res) => {
  try{
    const {id} = req.params;
    const partner = await Partner.findById(id);
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.post("/partner", async (req, res) => {
  try{
    const partner = await Partner.create(req.body);
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
 
});

app.put("partner/:id", async (req, res) => {
  const {id} = req.params;
  await Partner.updateOne({_id: id}, req.body);
  const updatedPartner = await Partner.findById(id);
  return res.status(200).json(updatedPartner);
});

app.delete("/partner/:id", async(req, res) => {
  const {id} = req.params;
  const deletedPartner = await Partner.findByIdAndDelete(id);
  return res.status(200).json(deletedPartner);
})

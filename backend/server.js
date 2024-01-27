import express from "express";
import { connectDB } from "./database/database.js";
import User from "./models/schema.js";
import Partner from "./models/partnerSchema.js";
import bodyparser from "body-parser";
import router from "./routes/router.js";
// import path from "path";
const app = express();

app.use(express.json());

// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from s2s server" });
});



const PORT = process.env.PORT || 4000;

connectDB().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
// app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
// app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

app.use("/", router);



// API for users

// app.post("/users", async (req, res) => {
//   try{
//     const user = await User.create(req.body);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
 
// });

// app.put("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   await User.updateOne({_id: id}, req.body);
//   const updatedUser = await DocumentFragment.findById(id);
//   return res.status(200).json(updatedUser);
// });

// app.delete("/users/:id", async(req, res) => {
//   const {id} = req.params;
//   const deletedUser = await User.findByIdAndDelete(id);
//   return res.status(200).json(deletedUser);
// })

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.get("/users/:id", async(req, res) => {
//   try{
//     const {id} = req.params;
//     const user = await User.findById(id);
//     res.status(200).json(user);
//   } catch(error) {
//     res.status(500).json({message: error.message});
//   }
// })



// // API for delivery partners
// app.get("/partner", async (req, res) => {
//   try {
//     const partners = await Partner.find({});
//     res.send(partners);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.get("/partner/:id", async(req, res) => {
//   try{
//     const {id} = req.params;
//     const partner = await Partner.findById(id);
//     res.status(200).json(partner);
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })

// app.post("/partner", async (req, res) => {
//   try{
//     const partner = await Partner.create(req.body);
//     res.status(200).json(partner);
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
 
// });

// app.put("partner/:id", async (req, res) => {
//   const {id} = req.params;
//   await Partner.updateOne({_id: id}, req.body);
//   const updatedPartner = await Partner.findById(id);
//   return res.status(200).json(updatedPartner);
// });

// app.delete("/partner/:id", async(req, res) => {
//   const {id} = req.params;
//   const deletedPartner = await Partner.findByIdAndDelete(id);
//   return res.status(200).json(deletedPartner);
// })

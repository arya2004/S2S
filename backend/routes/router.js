import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "../controllers/UserController.js";
import {
  createPartner,
  updatePartner,
  deletePartner,
  getAllPartners,
  getPartner,
} from "../controllers/partnerController.js";
import { testResponse } from "../controllers/testResponse.js";

const router = new express.Router();

// User routes
router.get("/", testResponse);
router.post("/api/users", createUser); //The post method is used to add a new resource to main resource
router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getUser); //url parameters
router.put("/api/users/:id", updateUser); //url parameters
router.delete("/api/users/:id", deleteUser);

// Partner routes
router.post("/api/partner", createPartner); //The post method is used to add a new resource to main resource
router.get("/api/partner", getAllPartners);
router.get("/api/partner/:id", getPartner); //url parameters
router.put("/api/partner/:id", updatePartner); //url parameters
router.delete("/api/partner/:id", deletePartner);

export default router;

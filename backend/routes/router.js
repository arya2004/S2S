const express = require('express');
const userController = require("../controllers/userController");
const partnerController = require("../controllers/partnerController");

const router = new express.Router();

// User routes
router.post("/api/users", userController.createUser); //The post method is used to add a new resource to main resource
router.get("/api/users", userController.getAllUsers);
router.get("/api/users/:id", userController.getUser); //url parameters
router.put("/api/users/:id", userController.updateUser); //url parameters
router.delete("/api/users/:id", userController.deleteUser);

// Partner routes
router.post("/api/partner", partnerController.createPartner); //The post method is used to add a new resource to main resource
router.get("/api/partner", partnerController.getAllPartners);
router.get("/api/partner/:id", partnerController.getPartner); //url parameters
router.put("/api/partner/:id", partnerController.updatePartner); //url parameters
router.delete("/api/partner/:id", partnerController.deletePartner);

module.exports = router;
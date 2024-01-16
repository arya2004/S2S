const express = require('express');
const User = require('./schema');
const router = new express.Router();

router.post("/api/users", User.post); //The post method is used to add a new resource to main resource
router.get("/api/users", User.get);
router.put("/api/users/:id", User.patch); //url parameters
router.delete("/api/users/:id", User.delete);

module.exports = router;
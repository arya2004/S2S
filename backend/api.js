const express = require('express');
const User = require('./schema');
const app = express();

app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    }catch (error) {
        res.status(400).send(error);
      }
});


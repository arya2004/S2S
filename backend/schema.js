const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

const newUser = new User({
    name: 'John Doe',
    email: "john@emaple.com",
    password: 'password123'
})

newUser.save(function(err) {
    if (err) return console.error(err);
    console.log("User data");
});

module.exports = User;
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        ref: 'User',
        required: true,
    },
    products: [{
        productsId: Number,
        quantity: Number,
        name: String,
        price: Number
    }],
    active: {
        type:Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
{ timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);
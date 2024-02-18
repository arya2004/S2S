import User from "../models/schema.js";
import Cart from "../models/cartSchema.js";

const createUser = async (req, res) => {
    if(!req.body) {
        res.status(400).send({message: "Content should not be empty!"});
        return;
    }

    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
  await User.updateOne({_id: id}, req.body);
  const updatedUser = await DocumentFragment.findById(id);
  return res.status(200).json(updatedUser);
}

const deleteUser = async(req, res) => {
    const {id} = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedUser);
}

const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
      } catch (error) {
        res.status(500).send(error);
      }
}

const getUser = async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
      } catch(error) {
        res.status(500).json({message: error.message});
      }
}

const addItemToCart = async (req, res) => {
    const { userId, productId, name, price } = req.body;
    const quantity = Number.parseInt(req.body.quantity);

    try {
      let cart = await Cart.findOne9({userId});

      if(cart) {
        let itemIndex = cart.products.findIndex(p => p.productId == productId);
        if (itemIndex > -1) {
          // product exists in the cart, update the quantity
          let productItem = cart.products[itemIndex];
          cart.products[itemIndex] = productItem;
        } else {
          cart.products.push({ productId, quantity, name, price});
        }
        cart = await cart.save();
        return res.status(201).send(cart);
      } else {
        // no cart for user, create new cart
        const newCart = await Cart.create({
          userId,
          products: [{ productId, quantity, name, price}]
        });
        return res.status(201).send(newCart);
      }
    } catch(err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
}

export {createUser, updateUser, deleteUser, getAllUsers, getUser, addItemToCart};
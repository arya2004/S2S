import User from "../models/schema.js";

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

export {createUser, updateUser, deleteUser, getAllUsers, getUser};
import mongoose from 'mongoose';

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


const saveUser = async () => {
    try {
        await saveUser.save();
        console.log('User saved');
    } catch (error) {
        console.error();
    }
}
export default User;
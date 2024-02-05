
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    address: {
        type: String,
        required: false
    },
    optionChecked: {
        type: Boolean,
        required: false
    },
    loginDate: {
        type: Date,
        default: Date.now
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

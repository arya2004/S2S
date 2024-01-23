
import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    deliveries: {
        type: Number,
        required: true
    },
    rewards: {
        type: [String],     
    }
    
})

const Partner = mongoose.model('Partner', partnerSchema);


const saveUser = async () => {
    try {
        await saveUser.save();
        console.log('User saved');
    } catch (error) {
        console.error();
    }
}
export default Partner;

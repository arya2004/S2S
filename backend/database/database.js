import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
    

const connectDB = async () => {

    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "s2s db"
    }).then(() => console.log("database connected"))
    .catch((e) => { console.log(e) })
}



export {connectDB}
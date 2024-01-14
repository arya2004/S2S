import express from 'express'
import { connectDB } from './database/database.js'

const app = express()

app.get("/",(req,res)=>{
  res.json({message:"hello from s2s server"})
})

const PORT = process.env.PORT || 4000;

connectDB().then(()=>{
  app.listen(PORT,()=>{
    console.log("server running on port:",PORT);
  })
})
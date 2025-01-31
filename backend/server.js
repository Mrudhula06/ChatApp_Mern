
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from './routes/authroutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose'
import connectToMongoDb from "./db/connectToMongoDb.js";


const app=express();
const PORT= process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); //to parse the incoming requests with json payloads
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



// app.get("/",(req, res)=>{
//     //root route http://localhost:5000/
//     res.send("Hello, World!!");
// });

app.listen(PORT,() =>{
    connectToMongoDb();
    console.log(`Server is running on the port ${PORT}`);
   
});
// console.log(process.env.MONGO_URI);

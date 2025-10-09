import mongoose from "mongoose";



export async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("Connected to MongoDB successfully")
        })
        connection.on('error',(err)=>{
            console.error("MongoDB connection error. Make sure mongoDB is running",err)
        })
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB",error)
        
    }
}
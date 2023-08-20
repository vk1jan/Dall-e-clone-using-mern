import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connectdb.js";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config();
const port=3000;


const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get("/",async (req,res) =>{
    res.send("DALL-E Clone is workingggg!!!");
});

const startServer = async () =>{
    try{
    connectDB();
    app.listen(port, ()=>console.log(`Server has started on port ${port}`));
    }catch(err){
        console.log(err);
    }
}

startServer();
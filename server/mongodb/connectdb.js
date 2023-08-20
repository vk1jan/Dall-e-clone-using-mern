import mongoose from "mongoose";

const connectDB = () =>{
    // mongoose.set('strictQuery',true);
    mongoose.connect(process.env.MONGODB_URL,  {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
      })
    .then(()=>console.log("MongoDB Connected."))
    .catch((err)=>console.log(err));
}

export default connectDB;
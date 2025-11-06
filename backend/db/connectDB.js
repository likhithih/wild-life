import mongoose from "mongoose";

const  connectDB=async(url)=>{
    try {
         await mongoose.connect(url)
        console.log(`MongoDB is connected successfully`)
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB;
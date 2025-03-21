import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:12345@cluster0.36rgb.mongodb.net/food_del').then(()=>console.log("DB connected"));
}
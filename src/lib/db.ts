import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

let isConnected: boolean = false;

export const connectDb = async () => {

  if (isConnected) return;
  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Db connection failed: ",error);
  }
}
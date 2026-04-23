import mongoose from "mongoose";


let isConnected: boolean = false;

export const connectDb = async () => {

  if (isConnected) return;
  try {
    await mongoose.connect('mongodb://hiteshpant:alright@ac-icougvc-shard-00-00.fbhzw9j.mongodb.net:27017,ac-icougvc-shard-00-01.fbhzw9j.mongodb.net:27017,ac-icougvc-shard-00-02.fbhzw9j.mongodb.net:27017/news_app?ssl=true&replicaSet=atlas-qdc2iw-shard-0&authSource=admin&appName=Cluster0');
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Db connection failed: ",error);
  }
}
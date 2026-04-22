import mongoose from "mongoose";


let isConnected : boolean = false;

export const connectDb = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect('mongodb+srv://hiteshpant50:alright@cluster0.fbhzw9j.mongodb.net/First_NextJs');
        isConnected = true;
        console.log('MongoDb Connectd')
    } catch (error) {
        console.log(error);
        
    }
}



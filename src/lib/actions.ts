'use server';


import { News } from "@/models/News";
import { connectDb } from "./db";
import { NewsInterface } from "@/models/model";
import { revalidatePath } from "next/cache";

export async function getNews() {
    await connectDb();

    try {
        const news = await News.find({});
        return {
            success: true,
            data: news
        }
    } catch (error) {
        console.log('Error is: ',error);
        return {
            success: false,
            message: 'Failed to get news'
        }
        
    }

}


export async function getNewsById(id: string) {
    await connectDb();

    try {
        const news = await News.findById(id);
        
        return {
            success: true,
            data: news
        }
    } catch (error) {
        console.log('Error is: ',error);
        return {
            success: false,
            message: 'Failed to get news'
        }
        
    }

}


export async function addNews(news: NewsInterface) {
    await connectDb();

    try {
        await News.create(news);
        revalidatePath('/')

        return {
            success: true,
            message: 'News added successfully'
        }
    } catch (err: any) {
        return {
            success: false,
            message: err.mesage

        }
        
    }
    
}


export async function removeNews(id: string) {
    await connectDb();


    try {
        await News.findByIdAndDelete(id);
        revalidatePath('/')
        return {
            success: true,
            message: 'News removed successfully'
        }
        
    } catch (err: any) {
        return {
            success: false,
            message: err.mesage

        }
        
    }
    
}


export async function updateNews(id: string, news: NewsInterface) {
    await connectDb();


    try {
        await News.findByIdAndUpdate(id, news);
        revalidatePath('/')
        return {
            success: true,
            message: 'News updated successfully'
            
        }
        
        
    } catch (err: any) {
        return {
            success: false,
            message: err.mesage

        }
        
    }
    
}
import { connectDb } from "@/lib/db";
import { News } from "@/models/News";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    console.log(params.get(''))
    return NextResponse.json({data: 'hello'}, {status: 200})

    
}


export async function POST(req: NextRequest) {
    await connectDb();
    const body = await req.json();


    try {
        await News.create(body);
        return NextResponse.json({ message: 'News added successfully'}, {status: 201});
    } catch (err: any) {
        return NextResponse.json({message: 'Failed to add news', err}, {status: 500})
        
    }

    
}
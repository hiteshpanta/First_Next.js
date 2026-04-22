import { NextResponse } from "next/server";


const Product =[
    {name: 'product-1', price: 80},
    {name: 'product-2', price: 20}
]


export async function GET() {
    return NextResponse.json({products: Product}, {status: 200})

}

import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    console.log(params.get('number'));

    const number = Number(params.get('number'));

    let result;
    let square = number*number;;
    
    if (number*0 ===0 ){
        if (number%2 === 0) {  
            result = 'even'
        
        }else {
            result = 'odd'
            
            
        }
    } else {
        return NextResponse.json({message : 'please provide a number'})
    }
    

    return NextResponse.json({response: `number is ${result}`,squared_value: `The Square of ${number} is ${square}`},{
        status: 200
    })
}

export async function POST(req: NextRequest) {
   
    const body = await req.json();

    return NextResponse.json({name: req}, {status: 200})
}
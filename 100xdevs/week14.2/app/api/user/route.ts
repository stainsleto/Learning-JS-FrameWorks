
/**
 * This method will expose the api but using server actions won't expose the api's and can be used internally 
 * checkout the method used in actions/user.ts
 */

import { NextRequest, NextResponse } from "next/server"
import client from "@/db"

export async function GET(){
    // database logic can go here 
    const user = await client.user.findFirst()
    return Response.json({
        id:user?.id,
        username:user?.username,
    })
}

export async function POST(req : NextRequest){

    const body = await req.json();
    try{
        await client.user.create({
            data:{
                username: body.username,
                password: body.password
            }
        })
        return NextResponse.json({
            message : "You are logged in!"
        })
    }
    catch(e){
        return NextResponse.json({
            message:"Error while signing up"
        },
        {
            status:411
        })
    }
    
}


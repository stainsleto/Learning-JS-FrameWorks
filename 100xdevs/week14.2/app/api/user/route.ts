import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET(){
    // database logic can go here 
    return Response.json({
        username:"stains",
        email: "stains@email.com"
    })
}

export async function POST(req : NextRequest){

    const body = await req.json();
    await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    return Response.json({
        message : "You are logged in!"
    })
}
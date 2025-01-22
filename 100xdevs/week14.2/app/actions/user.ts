// use this 'use server' snippet when we use the server actions
// this method won't expose the api's
"use server"


import client from "@/db"


export async function signup( username:string, password:string){

    try{
        await client.user.create({
            data:{
                username: username,
                password: password
            }
        })
        return true
    }
    catch(e){
        return false
    }
    
}
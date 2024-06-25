import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function inputUser(email: string, password: string, firstName: string, lastName: string){
   const res =  await prisma.user.create({
        data:{
            email: email,
            password,
            firstName,
            lastName
        },
        select:{
            id:true
        }
    }
    )

    console.log(res);

}

interface UpdateParams{
    firstName?: string,
    lastName?: string
}

async function updateUser(username: string,{
    firstName,
    lastName
}: UpdateParams){
    const res = await prisma.user.update({
        where:{email : username},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}

async function deleteUser(username:string){
    const res = await prisma.user.delete({
        where:{email:username}
    })

    console.log(res)
}

async function getUser(username: string){
    const res = await prisma.user.findFirst({
        where:{email:username}
    })

    console.log(res)
}
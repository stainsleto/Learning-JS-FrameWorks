import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}



async function insertUser(username: string, password: string, firstName: string, lastName: string, email : string) {
  await prisma.user.create({
    data:{
        username,
        password,
        firstName,
        lastName,
        email
    }
  })
}

async function updateUser(username: string, {firstName, lastName} : UpdateParams){
    await prisma.user.update({
        where:{
            username: username,
        },
        data:{
            firstName,
            lastName
        }
    })
}

const getTodosAndUser = async (userId: number) => {
    const res = await prisma.todo.findMany({
        where:{
            userId
        },
        select:{
            id:true,
            title:true,
            description: true,
            user: true    // provides user data too
        }
    })

    console.log(res)
}

// insertUser('new user','new password','new name', 'last name','test@mail.com')

// updateUser('test', {firstName :'updated firstName', lastName : 'New LastName' })
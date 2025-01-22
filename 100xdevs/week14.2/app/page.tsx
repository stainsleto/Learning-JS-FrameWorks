// Don't use PrismaClient in Client Side Rendering --> 'use client'

// by following this method the prisma initiation will be done only once even if multiple hot reload happens
//this method avoids using PrismaClient and it's initiated in the global scope with the file named db.ts
import client from "@/db"

async function getUserDetails(){
  // added artificial delay to simulate the loader from loading.tsx
  // await new Promise(r => setTimeout(r, 5000))
  
  /**
   * This is the old method in fetching data from the backend
   */

    // const response = await axios.get("http://localhost:3000/api/user")

    /**
   * Using next we can make the db calls directly from here
   */

  const user = await client.user.findFirst()
  return{
    id:user?.id,
    username:user?.username,
  }

  // return response.data
}

//next supports async only in server component
export default async function Home() {
  const userData  = await getUserDetails()

  return (
    <div className="flex flex-col w-screen items-center justify-center p-10">
      <p>{userData.id}</p>
      <p>{userData.username}</p>
    </div>
  );
}

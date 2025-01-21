import axios from "axios";

async function getUserDetails(){
  // added artificial delay to simulate the loader from loading.tsx
  // await new Promise(r => setTimeout(r, 5000))  
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}

//next supports async only in server component
export default async function Home() {
  const userData  = await getUserDetails()

  return (
    <div className="flex flex-col w-screen items-center justify-center p-10">
      <p>{userData.username}</p>
      <p>{userData.email}</p>
    </div>
  );
}

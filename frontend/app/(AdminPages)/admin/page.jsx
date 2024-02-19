"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


const page = () => {
    const [username,setUsername] = useState("");
    const[password,setPassowrd]=useState("");

    const router = useRouter();
    function handleAdminLogin(e)
    {
        e.preventDefault();
        if(username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
        {
            console.log("correct creds")
            router.push('/admin-dash')
            
        }
        else{
            console.log("invalid creds")
        }
    }
  return (
    <div>

        <form onSubmit={handleAdminLogin} className=" flex flex-col items-center justify-center h-[100vh] gap-2">
            <h1>Admin Login</h1>
            <input type="text" 
            placeholder="Enter Admin Username" 
            className=" text-center text-black"
            onChange={(e)=>setUsername(e.target.value)}
            />

            <input type="password" 
            placeholder="Enter Admin Password" 
            className=" text-center text-black"
            onChange={(e)=>setPassowrd(e.target.value)}
            />

            <button className=" px-4 py-2 bg-blue-600 mt-1">Submit</button>

        </form>

    </div>
  )
}

export default page
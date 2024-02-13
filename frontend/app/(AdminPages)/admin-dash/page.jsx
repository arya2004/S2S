"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
    const router = useRouter();
    
    useEffect(() => {
        const referrer = document.referrer;
        console.log(referrer)
        if (referrer !== '/admin') {
          router.push('/access-denied');
        }
      }, []);
  return (
    <div>
        <h1>Admin DashBoard</h1>
    </div>
  )
}

export default page
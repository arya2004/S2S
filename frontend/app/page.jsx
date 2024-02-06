"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import {socket} from '../socket.js'
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    function onConnect() {
      console.log("socket is connected");
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.h1 animate={{y:-10}} className=" text-3xl font-bold">S2S</motion.h1>
      <motion.div
        initial={{ y: -100,opacity:0 }}
        animate={{ y: 0,opacity:1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/home1.jpg" width={500} height={100} />
      </motion.div>
      <h3>By the community for the community.</h3>
      <div className="flex space-x-4">
  <motion.a
    animate={{ opacity: 1 }}
    className="bg-[#2A9D8F] opacity-50 px-2 rounded-sm hover:text-[#E9C46A] transition-all duration-200 font-bold text-xl"
    href={"/usrSignup"}
  >
    Signup as User
  </motion.a>

  <motion.a
    animate={{ opacity: 1 }}
    className="bg-[#2A9D8F] opacity-50 px-2 rounded-sm hover:text-[#E9C46A] transition-all duration-200 font-bold text-xl"
    href={"/ptnrSignup"}
  >
    Signup as Partner
  </motion.a>
</div>
    </main>
  );
}

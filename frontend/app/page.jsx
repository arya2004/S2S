"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
export default function Home() {
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
      <motion.a
        animate={{ opacity: 1 }}
        className=" bg-[#2A9D8F]
         opacity-50
       px-2 rounded-sm
      hover:text-[#E9C46A]
      transition-all 
      duration-200 
      font-bold 
      text-xl"
        href={"/usrSignup"}
        
      >
        Get Started
      </motion.a>
    </main>
  );
}

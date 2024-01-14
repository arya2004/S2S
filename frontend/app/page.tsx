"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <>
      <h1 className=" font-bold text-2xl">Welcome to s2s frontend</h1>
    </>
  );
}

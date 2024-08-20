"use client"
import React from "react";
import img from "../assets/not-found.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  return (
    <>
      <section className="p-4">
        <div className="h-full">
          <div className="h-full flex flex-col justify-center items-center">
            <Image src={img}  width={200} height={350} className="w-30 h-full"/>
            <h1 className="font-semibold text-xl">404 Not Found ;(</h1>
            <button onClick={() => router.back()} classname="underline">Back</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

import Image from "next/image";
import React from "react";
import profile from "@/public/assets/profile.png";
import { TfiNewWindow } from "react-icons/tfi";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-0">
      <div className="flex-1">
        <Image src={profile} alt="my_profile" className="w-4/5" />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-5xl font-semibold">
          Turning Vision Into Reality With Code And Design.
        </h1>
        <h3 className="text-lg my-4">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </h3>
        <div className="flex w-full justify-center">
          <button className="rounded-full bg-zinc-400 px-6 py-3 flex justify-center items-center">
            <span className="mr-1">Resume</span>
            <TfiNewWindow />
          </button>
          <button className="underline ml-4">Contact</button>
        </div>
      </div>
    </div>
  );
}

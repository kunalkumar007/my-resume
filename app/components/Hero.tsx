import Image from "next/image";
import React from "react";
import profile from "@/public/assets/profile.png";
import { TfiNewWindow } from "react-icons/tfi";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-0">
      <div className="flex-1">
        <Image
          // src="https://res.cloudinary.com/kunal-img/image/upload/v1708839164/my-resume%20Github%20Project%20Assets/profile_sc088w.png"
          src="https://res.cloudinary.com/kunal-img/image/upload/v1708839478/my-resume%20Github%20Project%20Assets/photoroom_pic-removebg-preview_b9lw5h.png"
          alt="my_profile"
          width={400}
          height={400}
          className="w-4/5"
        />
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
        <div className="flex w-full justify-center items-center">
          <Link
            href="https://drive.google.com/file/d/1z3Kywqg3A11S7CAXEIXXar_ZfKp1GnEx/view?usp=sharing"
            className="rounded-full bg-zinc-400 px-6 py-3 flex justify-center items-center transition-transform transform-gpu hover:scale-110"
            target="_blank"
          >
            <span className="mr-1">Resume</span>
            <TfiNewWindow />
          </Link>
          <Link
            href="mailto:kunalinbox83@gmail.com"
            className="underline ml-4 transition-transform transform-gpu hover:scale-110"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

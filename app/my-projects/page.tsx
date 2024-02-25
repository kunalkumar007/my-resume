import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import { androidApps } from "@/config/industrial_projects";

export default function Projects() {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="lg:text-9xl md:text-5xl text-2xl font-bold text-center">
        Imagination Trumps Knowledge!
      </h1>
      <h1 className="text-center mt-4 font-semibold text-xl md:text-2xl lg:text-4xl text-wrap">
        React Native (Android) Projects
      </h1>
      <div className="h-full flex flex-wrap justify-center items-center my-2">
        {androidApps.map((prj, idx) => (
          <Link
            className="border-4 border-black p-4 mx-4 mb-4 flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-110 w-3/4 md:w-1/3"
            href={prj.link}
            key={idx}
            target="_blank"
          >
            <Image
              src={prj.image_link}
              alt=""
              width={100}
              height={100}
              className="w-full"
              quality={100}
            />
            <h1 className="font-semibold text-xl lg:text-2xl">{prj.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import profile from "@/public/assets/about.jpg";
export default function Banner() {
  return (
    <div>
      <h1 className="lg:text-9xl md:text-5xl text-2xl font-bold text-center">
        Passion Fuels Purpose!
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-4">
        <div className="flex-1">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl text-center lg:text-left">
            BIOGRAPHY
          </h1>
          <p className="px-6 lg:px-0">
            As a highly skilled MERN stack developer with a strong foundation in
            front-end development and a specialization in Artificial
            Intelligence and Machine Learning, I offer a unique blend of
            technical expertise and educational background. With hands-on
            experience in React, React Native, ElectronJS, and Firebase, I
            possess the necessary skills to create dynamic and responsive user
            interfaces.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={profile}
            alt=""
            height={300}
            className="border-8 border-black p-2 rounded-lg w-3/4 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

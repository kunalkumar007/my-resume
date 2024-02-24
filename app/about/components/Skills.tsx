/* eslint-disable @next/next/no-img-element */
import skills from "@/config/skills";
import React from "react";

export default function Skills() {
  return (
    <div className="px-4 lg:px-0">
      <h1 className="text-4xl md:text-8xl text-center font-medium">Skills</h1>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between items-center my-4"
        >
          <h1 className="text-xl font-medium">{skill.name}</h1>
          <div className="flex justify-center items-center flex-wrap">
            {skill.tags.map((src, key) => (
              <img src={src} alt="reactjs" key={key} className="m-1" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

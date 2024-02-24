import experiences from "@/config/experience";
import React from "react";
/**
 * Got the Timeline from here.
 * https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/
 */
export default function Experience() {
  return (
    <div className="mb-4">
      <h1 className="text-4xl md:text-8xl text-center font-medium mb-4">
        Experience
      </h1>
      <div className="w-full max-w-3xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((exp) => (
            <div className="relative" key={exp.index}>
              <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                    {exp.index === 1 ? (
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          className="fill-slate-300"
                          d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                        />
                        <path
                          className="fill-slate-500"
                          d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                        />
                      </svg>
                    )}
                  </div>

                  <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                    {exp.startDate}
                  </time>
                </div>

                <div className="text-slate-500 ml-14 block lg:flex">
                  <span className="text-slate-900 font-bold block lg:flex mr-2">
                    {exp.name}
                  </span>
                  {exp.timeline}
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                {exp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

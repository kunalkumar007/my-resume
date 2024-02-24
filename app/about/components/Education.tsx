import education from "@/config/education";
import experiences from "@/config/experience";
import React from "react";
/**
 * Got the Timeline from here.
 * https://cruip.com/3-examples-of-brilliant-vertical-timelines-with-tailwind-css/
 */
export default function Education() {
  return (
    <div className="mb-4">
      <h1 className="text-4xl md:text-8xl text-center font-medium mb-4">
        Education
      </h1>
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
          {education.map((edu) => (
            <div key={edu.index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {edu.year}
                </time>
                <div className="text-xl font-bold text-slate-900">
                  {edu.name}
                </div>
              </div>
              <div className="text-slate-500">{edu.institution}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

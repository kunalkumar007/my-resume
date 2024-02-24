import React from "react";
import Header from "../components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function About() {
  return (
    <div className="container mx-auto">
      <Header />
      <Banner />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

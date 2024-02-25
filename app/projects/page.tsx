"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { androidApps, iosApps } from "@/config/industrial_projects";
import Slider from "./Slider";

export default function Project() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slidesToScroll, setSlidesToScroll] = useState(1);

  useEffect(() => {
    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const updateSlides = () => {
    if (window.innerWidth > 766) {
      setSlidesToShow(2);
      setSlidesToScroll(2);
    } else {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    }
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="lg:text-9xl md:text-5xl text-2xl font-bold text-center">
        Imagination Trumps Knowledge!
      </h1>
      <h1 className="text-center my-4 p-2 font-semibold text-xl md:text-2xl lg:text-4xl text-wrap">
        React Native (Android) Projects
      </h1>
      <Slider data={androidApps} settings={settings} />
      <h1 className="text-center my-4 font-semibold text-xl md:text-2xl lg:text-4xl text-wrap p-4">
        React Native (IOS) Projects
      </h1>
      <Slider data={iosApps} settings={settings} />
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import { androidApps } from "@/config/industrial_projects";
import Image from "next/image";
import Link from "next/link";

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
      <h1 className="text-center mt-4 font-semibold text-xl md:text-2xl lg:text-4xl text-wrap">
        React Native (Android) Projects
      </h1>
      <Slider {...settings}>
        {androidApps.map((prj, idx) => (
          <div key={idx}>
            <div className="p-4">
              <Link
                href={prj.link}
                target="_blank"
                className="border-4 border-black flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-110"
              >
                <Image
                  src={prj.image_link}
                  alt="image"
                  width={100}
                  height={0}
                  className="w-full h-full"
                  quality={100}
                />
                <h1 className="font-semibold text-lg lg:text-2xl text-center my-4">
                  {prj.name}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

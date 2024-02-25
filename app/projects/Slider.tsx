"use client";
import Image from "next/image";
import Link from "next/link";
import RNSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type Prop = {
  data: {
    name: string;
    image_link: string;
    link: string;
  }[];
  settings: Settings;
};

export default function Slider(props: Prop) {
  const { data, settings } = props;

  return (
    <RNSlider {...settings}>
      {data.map((prj, idx) => (
        <div key={idx}>
          <div className="p-4">
            <Link
              href={prj.link}
              target="_blank"
              className="border-4 border-black rounded flex flex-col justify-center items-center transition-transform transform-gpu hover:scale-110"
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
    </RNSlider>
  );
}

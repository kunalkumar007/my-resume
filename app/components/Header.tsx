import React from "react";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from "@/public/assets/name.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto p-2">
      <div className="flex items-center">
        <Link href="/">
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link href="/about">
          <p className="mx-2 cursor-pointer">About</p>
        </Link>
        <p className="cursor-pointer">Projects</p>
      </div>
      <div>
        <Image src={logo} alt="name" width={300} height={300} />
      </div>
      <div className="flex items-center">
        <Link href="https://twitter.com/ambitiouskunal">
          <FaSquareXTwitter size="1.5em" className="cursor-pointer" />
        </Link>
        <Link href="https://github.com/kunalkumar007">
          <FaGithub size="1.5em" className="cursor-pointer mx-2" />
        </Link>
        <Link href="https://www.linkedin.com/in/kunalkumar007">
          <FaLinkedin color="#0077B5" size="1.5em" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

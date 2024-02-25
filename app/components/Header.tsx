import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

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
        <Link href="/projects">
          <p className="cursor-pointer">Projects</p>
        </Link>
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/kunal-img/image/upload/v1708839163/my-resume%20Github%20Project%20Assets/name_n9ypvi.png"
          alt="name"
          width={300}
          height={300}
        />
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

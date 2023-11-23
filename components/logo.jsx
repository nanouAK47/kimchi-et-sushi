import Image from "next/image";
import { playfair } from "./fonts";

export default function Logo() {
  return (
    <a
      href="#"
      className="flex items-center relative pl-5 md:w-2/4 md:bg-primary"
    >
      <Image
        src="/logo.png"
        alt="Logo Kimchi & Sushi"
        width={100}
        height={100}
      />
      <h1
        className={`${playfair.className} font-bold text-white text-lg ml-3 hidden sm:flex`}
      >
        Kimchi & Sushi
      </h1>
    </a>
  );
}

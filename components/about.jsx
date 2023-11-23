import Image from "next/image";
import { playfair } from "./fonts";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row" id="a-propos">
      <div className="bg-white w-full relative md:w-1/2">
        <div className="bg-about-1 bg-right bg-cover border-b-8 border-creamson">
          <Image
            src="/sushi-3.png"
            alt="sushi"
            width={256}
            height={229}
            className="p-10"
          />
        </div>

        <a
          href="#menu"
          className="absolute top-1/2 right-0 py-3 px-8 bg-secondary text-white font-medium rounded-l-[32px]"
        >
          Menu
        </a>

        <div className="bg-about-2 bg-right bg-cover">
          <Image
            src="/sushi-2.png"
            alt="sushi"
            width={256}
            height={171}
            className="p-10"
          />
        </div>
      </div>

      <div className="flex-center flex-col text-center w-full p-8 md:w-1/2">
        <h1 className="subtitle">A propos / について</h1>
        <h2 className={`${playfair.className} title`}>
          Gastronomie Et Créativité.
        </h2>
        <p className="description">
          Notre restaurant asiatique est un mélange de subtilité, saveurs et
          couleurs. Notre équipe vous remercie de votre visite et vous souhaite
          bon appétit.
        </p>
      </div>
    </section>
  );
}

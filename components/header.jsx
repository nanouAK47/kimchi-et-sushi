import Image from "next/image";
import { playfair } from "./fonts";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row">
      <div className="flex flex-col w-full bg-primary relative md:w-1/2">
        <Image
          src="/sushi-1.png"
          alt="sushi"
          width={640}
          height={662}
          priority
        />
        <h2
          className={`${playfair.className} absolute left-5 bottom-5 font-bold text-8xl text-white`}
        >
          日 <br />
          本 <br />食
        </h2>
      </div>

      <div className="flex-between flex-col w-full text-center md:w-1/2">
        <div className="flex items-center flex-col h-full p-8">
          <h1 className={`${playfair.className} title`}>
            Kimchi & Sushi, à Neufchâteau.
          </h1>
          <h2 className="description">
            Pénétrez au coeur de la convivialité et découvrez
            l&apos;incomparable délicatesse d&apos;une gastronomie sachant
            allier originalité, raffinement et légèreté !
          </h2>

          <div className="flex flex-col gap-9 md:flex-row">
            <a href="tel:0329062235" className="button">
              03 29 06 22 35
            </a>
            <button className="border-none bg-transparent flex items-center text-black-200">
              <Image
                src="/play-circle.svg"
                alt="play"
                width={56}
                height={56}
                className="mr-3"
              />
              Voir la vidéo
            </button>
          </div>
        </div>

        <div className="p-8 space-y-2 mt-8 flex-center flex-col bg-white w-full">
          <p className="flex items-start">
            <Image
              src="/map.svg"
              alt="Localisation"
              width={24}
              height={24}
              className="mr-3"
            />
            8 rue de France, 88300 Neufchâteau.
          </p>
          <p className="flex items-start">
            <Image
              src="/calendar.svg"
              alt="Horaire"
              width={24}
              height={24}
              className="mr-3"
            />{" "}
            Ouvert de 11h à 14h et de 18h à 22h.
            <br />
            Fermé lundi et mardi.
          </p>
        </div>
      </div>
    </header>
  );
}

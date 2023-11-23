"use client";

import { usePathname } from "next/navigation";
import { playfair } from "../components/fonts";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 z-[999] w-full h-full flex-center text-center bg-creamson">
      <div>
        <h1 className={`${playfair.className} title`}>
          &quot;{pathname}&quot; introuvable
        </h1>
        <p className="description">
          Impossible de trouver la page &quot;{pathname}&quot;
        </p>
        <a href="/" className="button">
          Revenir à l&apos;accueil
        </a>
      </div>
    </div>
  );
}

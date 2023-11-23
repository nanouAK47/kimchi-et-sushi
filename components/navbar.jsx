"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "./logo";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex-between bg-primary md:bg-transparent">
      <Logo />

      <ul className="hidden font-medium text-secondary uppercase gap-10 mr-5 md:flex">
        <li>
          <a href="#a-propos">A propos</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <nav className="flex md:hidden">
        <Image
          onClick={() => setToggleMenu(true)}
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="mr-5 cursor-pointer"
        />

        {toggleMenu && (
          <nav className="fixed flex flex-col top-0 right-0 w-3/4 h-screen bg-creamson p-5 z-20 text-center slide">
            <Image
              onClick={() => setToggleMenu(false)}
              src="/close.svg"
              width={32}
              height={32}
              alt="Fermer le menu"
              className="right-5 absolute cursor-pointer"
            />

            <ul className="flex-center flex-col text-secondary font-medium text-4xl gap-6 h-1/2">
              <li onClick={() => setToggleMenu(false)}>
                <a href="#a-propos">A Propos</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#menu">Menu</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <a href="tel:0329062235" className="button mx-auto">
              03 29 06 22 35
            </a>

            <p className="description">8 rue de France, 88300 Neufchâteau</p>
          </nav>
        )}
      </nav>
    </nav>
  );
}

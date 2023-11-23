import Image from "next/image";
import Logo from "./logo";

export default function Footer() {
  const getAnneeActuelle = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="flex-between flex-col bg-white md:bg-creamson md:flex-row">
      <div className="flex-center flex-col bg-white w-full py-5 md:w-1/2 md:items-start md:bg-primary">
        <Logo />
        <p className="text-secondary font-medium pl-5 md:bg-primary md:text-white">
          &copy; {getAnneeActuelle()} Kimchi & Sushi | Tous droits réservés.
        </p>
      </div>

      <div className="flex gap-10 mb-8 md:mb-0">
        <a href="https://nb-web.fr" target="_blank">
          <Image src="/nb-web.png" width={64} height={64} alt="Logo NB web" />
        </a>
        <a href="tel:0329062235" className="button">
          <Image src="/phone.svg" alt="Appelez" width={22} height={22} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61553152905327"
          target="_blank"
          className="button"
        >
          <Image src="/facebook.svg" alt="Facebook" width={12} height={23} />
        </a>
      </div>
    </footer>
  );
}

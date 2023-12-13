import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { jakarta } from "../components/fonts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Kimchi & Sushi | restaurant asiatique à Neufchâteau",
  description:
    "Kimchi & Sushi est un restaurant asiatique à Neufchâteau. Appelez-nous au 03 29 06 22 35. Ouvert 7j/7 du lundi au dimanche.",
  openGraph: {
    title:
      "Kimchi & Sushi à Neufchâteau, pour les amoureux des plaisirs asiatique !",
    description:
      "Kimchi & Sushi, restaurant asiatique à Neufchâteau. Appelez-nous au 03 29 06 22 35. Ouvert 7j/7 du lundi au dimanche.",
    url: "https://kimchi-sushi.fr",
    siteName: "Kimchi & Sushi",
    phoneNumbers: "03 29 06 22 35",
    images: {
      type: "website",
      url: "/opengraph.png",
      width: 1920,
      height: 1080,
    },
    locale: "fr_FR",
    type: "website",
  },
  keywords:
    "kimchi sushi, kimchi sushi neufchateau, restaurant neufchateau, restaurant chinois neufchateau, restaurant asiatique neufchateau, sushis, makis, nems, ramens, restaurant japonais neufchateau, kimchi et sushi à neufchateau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${jakarta.className} max-w-7xl mx-auto bg-creamson`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

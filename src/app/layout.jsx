import { Roboto_Flex } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "../../public/Logo_ML.webp";
import "./styles/globals.scss";
import SearchBox from "./components/SearchBox/SearchBox";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "Mercado Libre Argentina - Envíos Gratis en el día",
  description:
    "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={robotoFlex.className}>
        <header className="header">
          <nav className="header__nav--container screen--xl">
            <Link className="header__nav--logo" href="/">
              <Image className="header__nav--image" src={headerLogo} alt="Logo Mercado Libre" priority />
            </Link>
            <SearchBox />
          </nav>
        </header>
        <main className="main--container screen--xl">{children}</main>
      </body>
    </html>
  );
}

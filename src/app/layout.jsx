import { Roboto_Flex } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "../../public/Logo_ML.webp";

import SearchBox from "./components/SearchBox/SearchBox";
import "./styles/globals.scss";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

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
          <nav className="nav-container container">
            <Link className="nav-logo__container" href="/">
              <Image className="nav-logo__image" src={headerLogo} alt="Logo Mercado Libre" />
            </Link>
            <SearchBox />
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

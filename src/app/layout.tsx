import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CZC Projects - Innovación y Seguridad en Guadalajara",
  description: "Diseñamos e implementamos soluciones de cámaras de seguridad, paneles solares, cableado estructurado, redes WIFI y nodos de red para empresas y hogares.",
  keywords: "cámaras de seguridad, paneles solares, cableado estructurado, redes WIFI, infraestructura de red, seguridad electrónica, Guadalajara, CZC Projects",
  openGraph: {
    title: "CZC Projects - Innovación y Seguridad",
    description: "Soluciones integrales de tecnología, seguridad y energía.",
    type: "website",
    url: "https://www.czcprojects.com,mx", // Reemplaza con tu dominio real
    images: [
      {
        url: "/logo-text-white.png", // Asegúrate de que esta imagen exista en /public
        width: 1200,
        height: 630,
        alt: "CZC Projects",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} h-full bg-black text-white flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
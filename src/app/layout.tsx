import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CZC Projects - Innovación y Seguridad",
  description: "Soluciones de seguridad, energía y tecnología para el futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      {/* CAMBIO CLAVE: de 'bg-white' a 'bg-black' */}
      <body className={`${inter.className} h-full bg-black text-white flex flex-col`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer /> 
      </body>
    </html>
  );
}
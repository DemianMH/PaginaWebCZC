import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { URL } from "url"; // Importa URL

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // --- LÍNEA AÑADIDA AQUÍ ---
  metadataBase: new URL('https://www.czcprojects.com.mx'),
  title: {
    default: "CZC Projects - Innovación y Seguridad en Guadalajara",
    template: "%s | CZC Projects",
  },
  description: "Diseñamos e implementamos soluciones de cámaras de seguridad, paneles solares, cableado estructurado, redes WIFI y nodos de red para empresas y hogares.",
  keywords: "cámaras de seguridad, paneles solares, cableado estructurado, redes WIFI, infraestructura de red, seguridad electrónica, Guadalajara, CZC Projects",
  openGraph: {
    title: "CZC Projects - Innovación y Seguridad",
    description: "Soluciones integrales de tecnología, seguridad y energía.",
    type: "website",
    url: "https://www.czcprojects.com.mx",
    images: [
      {
        url: "https://www.czcprojects.com.mx/logo-text-black.png",
        width: 1200,
        height: 630,
        alt: "CZC Projects Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CZC Projects',
    url: 'https://www.czcprojects.com.mx',
    logo: 'https://www.czcprojects.com.mx/logo-text-white.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-33-3027-8673',
      contactType: 'Customer Service',
    },
  };

  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CZC" />
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
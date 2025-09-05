import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: "CZC Projects - Soluciones de Innovación y Seguridad en Guadalajara",
  description: "Líderes en diseño e implementación de cámaras de seguridad, paneles solares, y redes WIFI. Transforma tu hogar o empresa con nuestra tecnología.",
};

export default function HomePage() {
  return <HomePageClient />;
}
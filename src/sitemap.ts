import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.czcprojects.com.mx';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/camaras-de-seguridad`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/paneles-solares`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cableado-estructurado`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/arquitectura-wifi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/nodos-de-red`,
      lastModified: new Date(),
    },
  ]
}
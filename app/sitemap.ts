import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gkdigitalsolutions.in'

  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/careers',
    '/case-studies',
    '/contact',
    '/faq',
    '/get-audit',
    '/industries',
    '/locations',
    '/portfolio',
    '/pricing',
    '/privacy-policy',
    '/process',
    '/services',
    '/terms-of-service',
    '/testimonials',
    '/why-choose-us',
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
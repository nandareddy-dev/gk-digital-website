import { MetadataRoute } from 'next'
import { locations } from '@/components/data/locations'
import { blogPosts } from '@/components/data/blog'

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

  // locations.ts lo add chesina prathi location automatic ga ikkada vachestundi
  const locationRoutes = locations.map((loc) => `/locations/${loc.slug}`)

  // blog.ts lo add chesina prathi post automatic ga ikkada vachestundi
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`)

  const allRoutes = [...staticRoutes, ...locationRoutes]

  return [
    ...allRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : route.startsWith('/locations/') ? 0.9 : 0.8,
    })),
    ...blogRoutes.map((route, i) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(blogPosts[i].date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
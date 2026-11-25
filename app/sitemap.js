import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://www.akoorwood.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

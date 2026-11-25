import './globals.css'

const siteUrl = 'https://www.akoorwood.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Akoor Wood | Furniture Jepara, Mebel Minimalis & Custom',
    template: '%s | Akoor Wood',
  },
  description:
    'Akoor Wood menghadirkan furniture Jepara berkualitas dengan karakter kayu alami dan desain modern. Temukan kursi cafe, kursi makan, meja, sofa, dan furniture custom.',
  applicationName: 'Akoor Wood',
  keywords: [
    'furniture Jepara',
    'mebel Jepara',
    'furniture kayu',
    'kursi cafe',
    'kursi makan kayu',
    'meja kayu',
    'sofa custom',
    'furniture custom',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'Akoor Wood',
    title: 'Akoor Wood | Furniture Jepara, Mebel Minimalis & Custom',
    description:
      'Furniture Jepara dengan karakter kayu alami, desain modern, dan sentuhan handmade workshop. Dari Kayu Menjadi Cerita.',
    images: [
      {
        url: '/akoor-hero-interior.png',
        width: 1536,
        height: 1024,
        alt: 'Furniture kayu Akoor Wood dalam interior ruang yang hangat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akoor Wood | Furniture Jepara, Mebel Minimalis & Custom',
    description:
      'Furniture Jepara dengan karakter kayu alami, desain modern, dan sentuhan handmade workshop.',
    images: ['/akoor-hero-interior.png'],
  },
  icons: {
    icon: '/akoor-logo-transparent.png',
    shortcut: '/akoor-logo-transparent.png',
    apple: '/akoor-logo-transparent.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Akoor Wood',
  url: siteUrl,
  logo: `${siteUrl}/akoor-logo-transparent.png`,
  description:
    'Brand furniture Jepara yang menghadirkan furniture kayu dengan desain modern dan pengerjaan berkualitas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}

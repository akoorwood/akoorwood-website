import './globals.css'

export const metadata = {
  title: 'Akoor Wood',
  description: 'Dari Kayu Menjadi Cerita',
  icons: {
    icon: '/akoor-logo-red-white.png',
    shortcut: '/akoor-logo-red-white.png',
    apple: '/akoor-logo-red-white.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

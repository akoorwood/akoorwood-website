import './globals.css'

export const metadata = {
  title: 'Akoor Wood',
  description: 'Dari Kayu Menjadi Cerita',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

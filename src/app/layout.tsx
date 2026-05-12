import type { Metadata } from 'next'
import './globals.css'
// Import gambar dari folder assets
import iconLogo from '../assets/2.jpg' 

export const metadata: Metadata = {
  title: 'Hafizh — Creative Developer',
  description: 'Portfolio of Hafizh Arrasyiid Syahbana, a creative developer & digital designer.',
  icons: {
    icon: iconLogo.src,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
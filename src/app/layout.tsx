import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hafizh — Creative Developer',
  description: 'Portfolio of Hafizh Arrasyiid Syahbana, a creative developer & digital designer.',
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

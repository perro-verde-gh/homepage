import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perro Verde - Fullscreen Slider',
  description: 'Tu mejor amigo digital - Fullscreen Slider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perro Verde - Split Screen',
  description: 'Tu mejor amigo digital - Split Screen',
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

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perro Verde - Parque Verde',
  description: 'Tu mejor amigo digital - Parque Verde',
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

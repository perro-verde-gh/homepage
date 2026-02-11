import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perro Verde - Dark Mode',
  description: 'Tu mejor amigo digital - Dark Mode',
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

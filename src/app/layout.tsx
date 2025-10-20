import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ares Inter GmbH — Gaming & Sports-Betting Technology Consulting',
  description: 'Market entry, product launches, software engineering & adaptation, and emerging tech for the sports betting industry.',
  openGraph: { title: 'Ares Inter GmbH', description: 'Gaming & Sports-Betting Technology Consulting', type: 'website' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

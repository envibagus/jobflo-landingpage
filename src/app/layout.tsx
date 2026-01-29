import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jobflo - Maximize Sales & Streamline Operations for Solar',
  description: 'Jobflo is tailored for the solar industry\'s unique needs, driving efficiency, scalability, and profitability through automated workflows and optimized operations.',
  keywords: ['solar', 'CRM', 'sales', 'management', 'automation', 'solar industry'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

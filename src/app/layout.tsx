import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cookmypapers - Affordable Academic Assistance',
  description: 'Get your projects and assignments done at very cheap cost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics Component */}
        <GoogleAnalytics trackPageViews gaMeasurementId="G-L2VG2QYGPG" />
        {children}
      </body>
    </html>
  )
}

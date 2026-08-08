import Providers from '@/app/providers'
import { ogImage, siteMeta, siteUrl } from '@/constants/site'
import '@/styles/globals.css'
import { cn } from '@/utils/cn-clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const playfair = localFont({
  src: '../styles/fonts/playfairdisplay-regular.woff',
  variable: '--font-playfair',
  weight: '400',
  display: 'swap',
})

const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Valeurs de repli des routes qui ne déclarent pas les leurs (news, tasks, web3).
  title: siteMeta.fr.title,
  description: siteMeta.fr.description,
  openGraph: {
    type: 'profile',
    siteName: 'Yannick Goalen',
    locale: siteMeta.fr.locale,
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image', images: [ogImage.url] },
  authors: [{ name: 'Yannick Goalen', url: siteUrl }],
  creator: 'Yannick Goalen',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          playfair.variable,
          geistMono.variable,
          'font-geist-mono text-[var(--high-contrast-text)] dark:text-[var(--high-contrast-text)]'
        )}
      >
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  )
}

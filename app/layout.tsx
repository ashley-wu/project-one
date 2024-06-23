import type { Metadata } from "next"
import "./globals.css"

import { noto_sans_tc, noto_sans_mono } from '@/app/lib/font'

export const metadata: Metadata = {
  title: "晉龍號",
  description: "晉龍號遊艇船隊",
}

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Navigation from '@/app/components/Navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${noto_sans_tc.variable} ${noto_sans_mono.variable}`}>
      <body>
        <main id='app_container'>
          <Header />
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import "./globals.css"

import { noto_sans_tc, noto_sans_mono } from '@/app/lib/font'

export const metadata: Metadata = {
  title: "Project One",
  description: "Project One",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${noto_sans_tc.variable} ${noto_sans_mono.variable}`}>
      <head>
        {/* Font Awesome */}
        <link href='/fontawesome/css/fontawesome.css' rel='stylesheet' />
        <link href='/fontawesome/css/brands.css' rel='stylesheet' />
        <link href='/fontawesome/css/solid.css' rel='stylesheet' />
      </head>
      <body>{children}</body>
    </html>
  )
}

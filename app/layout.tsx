import type { Metadata } from "next"
import "./globals.css"

import { noto_sans_tc, noto_sans_mono } from '@/app/lib/font'

export const metadata: Metadata = {
  title: "Project One",
  description: "Project One",
}

const pathPrefix = process.env.NODE_ENV === 'production' ? 'https://ashley-wu.github.io/ProjectOne/public' : ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${noto_sans_tc.variable} ${noto_sans_mono.variable}`}>
      <head>
        {/* Font Awesome */}
        <link href={`${pathPrefix}/fontawesome/css/fontawesome.css`} rel='stylesheet' />
        <link href={`${pathPrefix}/fontawesome/css/brands.css`} rel='stylesheet' />
        <link href={`${pathPrefix}/fontawesome/css/solid.css`} rel='stylesheet' />
      </head>
      <body>{children}</body>
    </html>
  )
}

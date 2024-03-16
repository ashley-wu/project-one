import type { Metadata } from "next"
// import Head from 'next/head'
// import { Head } from "next/document"
import "./globals.css"
import '@/public/fontawesome/css/fontawesome.css'
import '@/public/fontawesome/css/brands.css'
import '@/public/fontawesome/css/solid.css'


import { noto_sans_tc, noto_sans_mono } from '@/app/lib/font'

export const metadata: Metadata = {
  title: "Project One",
  description: "Project One",
}

// const pathPrefix = process.env.NODE_ENV === 'production' ? 'https://ashley-wu.github.io/ProjectOne/public' : ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${noto_sans_tc.variable} ${noto_sans_mono.variable}`}>
      {/* <Head> */}
        {/* <head> */}
        {/* Font Awesome */}
        {/* <link href={`/fontawesome/css/fontawesome.css`} rel='stylesheet' />
        <link href={`/fontawesome/css/brands.css`} rel='stylesheet' />
        <link href={`/fontawesome/css/solid.css`} rel='stylesheet' />
        </head> */}
      {/* </Head> */}
      <body>{children}</body>
    </html>
  )
}

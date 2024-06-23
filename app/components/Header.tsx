'use client'
import { useEffect } from 'react'
import Image from 'next/image'

import LogoImg from '@/public/image/logo.png'

export default function Header() {
  return (
    <header>
      <section className="relative h-full">
        <Image
          src={LogoImg}
          alt='Logo'
          fill
          style={{ objectFit: 'contain' }}
          priority
          unoptimized
        />
      </section>
    </header>
  )
}
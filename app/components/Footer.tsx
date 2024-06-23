'use client'
import Link from 'next/link'

import { LINE_URL, FACEBOOL_URL } from '@/app/lib/constant'

export default function Footer() {
  return (
    <footer>
      <section className='main_container'>
        <div className='grid grid-cols-[1fr_auto] justify-between'>
          <h1 className="font-medium font-mono">晉龍號海釣遊艇船隊</h1>
          <SocialMedia />
        </div>
        <ContactInfo />
      </section>
    </footer>
  )
}

const ContactInfo = () => {
  return (
    <div id='contact_info'>     
      <div className='grid grid-cols-[auto_1fr] items-baseline gap-x-2 text-sm font-mono'>
        <i className='fa-solid fa-phone-volume'></i>
        <p>(+886)0918-373-560</p>
      </div>
      <div className='hidden md:grid grid-cols-[auto_1fr] items-baseline gap-x-2 text-sm font-mono'>
        <i className='fa-regular fa-envelope'></i>
        <p>jinlong.yacht@gmail.com</p>
      </div>
      <div className='grid grid-cols-[auto_1fr] items-baseline gap-x-2 text-sm font-mono'>
        <i className='fa-solid fa-location-dot'></i>
        <p>八斗子漁港 基隆市中正區北寧路211號</p>
      </div>
    </div>
  )
}

const SocialMedia = () => {
  return (
    <div className='grid grid-flow-col auto-cols-min gap-3 items-center'>
      <Link 
        href={FACEBOOL_URL}
        target='_blank'
      >
        <i className='fa-brands fa-square-facebook text-[24px] text-[#3B5998]'></i>
      </Link>
      <Link 
        href={LINE_URL}
        target='_blank'
      >
        <i className='fa-brands fa-line text-[20px] text-[#06C755]'></i>
      </Link>
    </div>
  )
}
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <section className='grid max-w-[1000px] mx-auto p-6 sm:px-10'>
        <div className='font-semibold'>晉龍號海釣遊艇船隊</div>
        <ContactInfo />
        <SocialMedia />
      </section>
    </footer>
  )
}

const ContactInfo = () => {
  return (
    <div id='contact_info'>     
      <div className='flex items-center gap-x-2 text-sm py-1'>
        <i className="fa-solid fa-phone-volume"></i>
        <p>( +886 ) 0918 373 560</p>
      </div>
      <div className='flex items-center gap-x-2 text-sm py-1'>
        <i className="fa-regular fa-envelope"></i>
        <p>jinlong.yacht@gmail.com</p>
      </div>
      <div className='flex items-center gap-x-2 text-sm py-1'>
        <i className="fa-solid fa-location-dot"></i>
        <p>八斗子碧砂漁港 基隆市中正區北寧路211號</p>
      </div>
    </div>
  )
}

const SocialMedia = () => {
  return (
    <div className='grid grid-flow-col auto-cols-min gap-3 items-center pt-2'>
      <Link 
        href='https://www.facebook.com/profile.php?id=100063649581721'
        target='_blank'
      >
        <i className='fa-brands fa-square-facebook text-[34px] text-[#3B5998]'></i>
      </Link>
      <Link 
        href='https://line.me/R/ti/p/%40qsj5646s'
        target='_blank'
      >
        <i className='fa-brands fa-line text-3xl text-[#06C755]'></i>
      </Link>
    </div>
  )
}
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  return (
    <footer className='bg-white'>
      <section className='grid max-w-[800px] mx-auto p-6'>
        <div className='font-semibold'>晉龍號海釣遊艇船隊</div>
        <ContactInfo />
        <SocialMedia />
      </section>
    </footer>
  )
}

const ContactInfo = () => {
  return (
    <div className='grid md:grid-flow-col pt-4'>     
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
    <div className='pt-2'>
      <Link 
        href='https://www.facebook.com/profile.php?id=100063649581721'
        className='mr-2'
        target='_blank'
      >
        <i className='fa-brands fa-square-facebook text-[34px] text-[#3B5998]'></i>
      </Link>
      <Link 
        href='https://line.me/R/ti/p/%40qsj5646s'
        className=''
        target='_blank'
      >
        <i className='fa-brands fa-line text-3xl text-[#06C755]'></i>
      </Link>
    </div>
  )
}





const NavLink = ({ path, title }: { path: string, title: string}) => {
  const pathname = usePathname()
  const linkClass = 
    path === pathname ? 
    'link active font-semibold p-2' : 
    'link p-2'

  return (
    <li>
      <Link href={path} className={linkClass}>
        {title}
      </Link>
    </li>
  )
}
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  return (
    <footer className='grid grid-cols-2 justify-between p-4 bg-gray-50 sticky bottom-0 left-0 right-0'>
      <nav>
        <ul>
          <NavLink path='/' title='首頁' />
          <NavLink path='/fares' title='服務費用' />
        </ul>
      </nav>
      <div>
        <Link href='https://www.facebook.com/profile.php?id=100063649581721' target='_blank' className='mr-2'>
          <i className="fa-brands fa-square-facebook text-4xl text-primary"></i>
        </Link>
        <Link href='https://line.me/R/ti/p/%40qsj5646s' target='_blank'>
          <i className="fa-brands fa-line text-4xl text-primary"></i>
        </Link>
      </div>
    </footer>
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
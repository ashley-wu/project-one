import Link from 'next/link'

export default function Home() {
  console.log('NODE_ENV', process.env.NODE_ENV)
  return (
    <main className="min-h-screen grid items-center justify-items-center p-24">
      Project One
      <div>
        <Link href='https://line.me/R/ti/p/%40qsj5646s' target='_blank' className='mr-4'>
          <i className="fa-brands fa-line text-4xl text-gray-100"></i>
        </Link>
        <Link href='https://www.google.com' target='_blank'>
          <i className="fa-brands fa-line text-4xl text-gray-100"></i>
        </Link>
      </div>
    </main>
  )
}

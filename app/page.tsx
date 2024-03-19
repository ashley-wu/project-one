import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <main>
      <div className='relative sm:h-[360px] h-[200px] sm:w-[400px] w-[80%]'>
        <Image
          src={`${pathPrefix}/image/jinlong_logo.png`}
          fill
          // sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          alt='example image'
          style={{ objectFit: 'cover' }}
          priority
          unoptimized
        />
      </div>
      <h1 className='pt-2 pb-7'>官方網站更新中</h1>
      <Link 
        href={`https://jinlong-yacht.rezio.shop/zh-TW/product/U64ALI`}
        className='bg-primary text-white px-5 py-3 rounded-sm self-start'
        target='_blank'
      >
        秘境基隆嶼登島行程預約
      </Link>
    </main>
  )
}

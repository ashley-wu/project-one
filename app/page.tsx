import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  console.log(process.env.NODE_ENV, pathPrefix)
  console.log('assetPrefix', process.env.NEXT_PUBLIC_ASSET_PREFIX)

  return (
    <main>
      {/* <div className='h-[400px] w-[400px]'>
        <img src={`./image/example.PNG`} alt="example image" />
      </div> */}
      <div className='relative h-[200px] max-w-[80%] w-[200px]'>
        <Image
          src={`${pathPrefix}/image/jinlong_logo.png`}
          // src={'https://lh3.googleusercontent.com/pw/AP1GczMMpuC6OVboI2tCvXP3ENi-Y3HdfcAJahQZCzsWGcAMjy0kD4154mhd9GehJmGQcRx_aINRfk5YPaqRmfA8XnKoCSTkhFTuh4LTRFyD-6tC0lM9SKnSS5D1Zvv5UjgAjtnaNAXZM4H4bAo7Bu9yI0eUDw=w2580-h1452-s-no-gm?authuser=0'}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          alt='example image'
          style={{ objectFit: 'contain' }}
          priority
          unoptimized
        />
      </div>
      <h1 className='text-xl pt-6 pb-10'>官方網站更新中</h1>
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

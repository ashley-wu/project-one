import Image from 'next/image'

export default function Home() {
  const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  console.log(process.env.NODE_ENV, pathPrefix)
  console.log('assetPrefix', process.env.NEXT_PUBLIC_ASSET_PREFIX)

  return (
    <main className="min-h-screen grid items-center justify-items-center p-24">
      Project One
      <div className='h-[400px] w-[400px]'>
        <img src={`./image/example.PNG`} alt="example image" />
      </div>
      <div className='relative h-[400px] w-[400px]'>
        <Image
          src={`${pathPrefix}/image/example.PNG`}
          // src={'https://lh3.googleusercontent.com/pw/AP1GczMMpuC6OVboI2tCvXP3ENi-Y3HdfcAJahQZCzsWGcAMjy0kD4154mhd9GehJmGQcRx_aINRfk5YPaqRmfA8XnKoCSTkhFTuh4LTRFyD-6tC0lM9SKnSS5D1Zvv5UjgAjtnaNAXZM4H4bAo7Bu9yI0eUDw=w2580-h1452-s-no-gm?authuser=0'}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          alt='example image'
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </main>
  )
}

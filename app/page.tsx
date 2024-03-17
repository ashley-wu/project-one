import Image from 'next/image'
// import exampleImg from '@/public/image/example.png'
// const pathPrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BASE_PATH)
  return (
    <main className="min-h-screen grid items-center justify-items-center p-24">
      Project One
      <div className='relative h-[400px] w-[400px]'>
        <Image
          src={`/example.png`}
          // src={'https://lh3.googleusercontent.com/pw/AP1GczMMpuC6OVboI2tCvXP3ENi-Y3HdfcAJahQZCzsWGcAMjy0kD4154mhd9GehJmGQcRx_aINRfk5YPaqRmfA8XnKoCSTkhFTuh4LTRFyD-6tC0lM9SKnSS5D1Zvv5UjgAjtnaNAXZM4H4bAo7Bu9yI0eUDw=w2580-h1452-s-no-gm?authuser=0'}
          fill
          alt='example image'
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </main>
  )
}

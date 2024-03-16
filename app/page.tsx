import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen grid items-center justify-items-center p-24">
      Project One
      <div className='relative h-[400px] w-[400px]'>
        <Image
          src={'/image/example.png'}
          fill
          alt='example image'
          style={{ objectFit: 'contain' }}
        />
      </div>
    </main>
  )
}

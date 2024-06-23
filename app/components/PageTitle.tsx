
export default function PageTitle({ title }: { title: string }) {
  return (
    <div className='text-primary mt-[24px] sm:mt-[36px] mb-[60px]'>
      <h2 className='text-2xl font-medium tracking-wider text-primary text-center pb-4'>{title}</h2>
      <hr className='w-[60px] mx-auto border-primary border-[1px]' />
    </div>
  )
}
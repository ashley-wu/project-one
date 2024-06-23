import Link from 'next/link'

interface ButtonProps {
  title: string
  path: string
  icon?: string
}

export default function ButtonLink({ title, path, icon = 'fa-solid fa-arrow-right' }: ButtonProps) {
  return (
    <Link
      href={path}
      className='px-6 py-3 font-medium bg-primary rounded-sm text-offwhite hover:bg-primary/80'
      target='_blank'
    >
      {title}
      <i className={icon + ' ml-2'}></i>
    </Link>
  )
}
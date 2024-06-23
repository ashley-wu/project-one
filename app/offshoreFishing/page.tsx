import PageTitle from '@/app/components/PageTitle'
import ButtonLink from '@/app/components/ButtonLink'
import { OFFSHORE_FISHING_RESERVATION_URL, FACEBOOL_URL } from '@/app/lib/constant'

export default function OffshoreFishing() {
  return (
    <main>
      <section className='main_container'>
        <PageTitle title='海釣季節行程' />
        <Card />
        <section className='grid grid-flow-col justify-center gap-x-9 pt-[60px]'>
          <ButtonLink title='海釣體驗預約' path={OFFSHORE_FISHING_RESERVATION_URL} />
          <ButtonLink title='專業海釣預約' path={FACEBOOL_URL} />

        </section>
      </section>      
    </main>
  )
}

const Card = () => {
  return (
    <div className='bg-white/70 shadow rounded-lg px-6 sm:px-8 py-8 w-[90%] max-w-[600px] mx-auto space-y-4 grid justify-center'>
      {
        seasons.map(season => (
          <Item key={season.name} {...season} />
        ))
      }
    </div>
  )
}

const Item = ({ duration, name, icon = 'fa-solid fa-fish-fins' }: { duration: string, name: string, icon?: string }) => {
  return (
    <div className='font-mono font-medium text-primary grid grid-cols-[auto_68px_1fr] gap-x-3 sm:gap-x-6 items-baseline'>
      <i className={icon}></i>
      <div className='justify-self-end'>
        <span>{duration}</span>
        <span className='pl-1'>月</span>
      </div>
      <div>{name}</div>
    </div>
  )
}

const seasons = [
  { duration: '2～3', name: '基隆嶼近海馬加班' },
  { duration: '5～10', name: '基隆嶼近海夜間小搞搞班' },
  { duration: '6～9', name: '北方三島透抽班' },
  { duration: '10～4', name: '基隆嶼近海小搞搞班/花枝軟絲班' },
  { duration: '10～6', name: '北方三島紅甘/大目/赤宗/馬頭深場班' },
  { duration: '10～6', name: '中程深場底棲班' },
]


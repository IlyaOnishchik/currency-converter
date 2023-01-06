import { FC } from 'react'

import { Currency } from '../../../types/Currency'
import RatesItemButton from './RatesItemButton'

type RatesItemProps = {
  currency: Currency
  isBasic?: boolean
  isFavorite?: boolean
  onToggleFavorite: () => void
}

const RatesItem: FC<RatesItemProps> = ({ currency, isBasic, isFavorite, onToggleFavorite }) => {
  return (
    <div className={`flex items-center | gap-5 pr-3 | rounded-xl ${isBasic ? 'bg-sky-300' : ''}`}>
      <div className={`flex-auto | flex | gap-3 p-3 | transition-all rounded-xl ${isBasic ? '' : 'hover:bg-sky-200'} cursor-pointer`}>
        <img src={`http://localhost:3001/${currency.imageName}`} alt={currency.name + ' country flag'} width='32px'/>
        <div className=' | font-semibold whitespace-nowrap'>{currency.code}</div>
        <div className='hidden sm:block | font-semibold whitespace-nowrap'>{currency.name}</div>
      </div>
      <div className='basis-1/5 | text-center font-semibold'>1</div>
      <RatesItemButton isBasic={isBasic} variant={isFavorite ? 'solid' : 'outline'} onClick={onToggleFavorite}/>
    </div>
  )
}

export default RatesItem
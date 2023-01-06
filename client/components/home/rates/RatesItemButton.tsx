import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { FC } from 'react'

type RatesItemButtonProps = {
  isBasic?: boolean
  variant?: 'outline' | 'solid'
  onClick: () => void
}

const RatesItemButton: FC<RatesItemButtonProps> = ({ isBasic, variant, onClick }) => {
  return (
    <button onClick={onClick} className='basis-8'>
      {variant === 'solid' ? (
        <HeartIconSolid className={`w-8 h-8 | transition-all ${isBasic ? 'text-white' : 'text-sky-300 hover:text-sky-500'}`}/>
      ) : (
        <HeartIconOutline className={`w-8 h-8 | transition-all ${isBasic ? 'text-white' : 'text-sky-300 hover:text-sky-500'}`}/>
      )}
      
    </button>
  )
}

export default RatesItemButton
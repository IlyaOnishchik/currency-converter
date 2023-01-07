import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeFrom, changeTo } from '../../redux/slices/converterSlice'

const ReverseButton = () => {

  const { from, to } = useAppSelector(state => state.converter)
  const dispatch = useAppDispatch()

  const handleReverse = () => {
    const temp = from
    dispatch(changeFrom(to))
    dispatch(changeTo(temp))
  }

  return (
    <button onClick={handleReverse} className='p-2 transition-all rounded-xl hover:shadow-inner bg-sky-100 hover:bg-sky-200'>
      <ArrowsRightLeftIcon className='w-6 h-6'/>
    </button>
  )
}

export default ReverseButton
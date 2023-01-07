import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeAmount } from '../../redux/slices/converterSlice'

const Input = () => {
  const { amount } = useAppSelector(state => state.converter)
  const dispatch = useAppDispatch()

  return (
    <input
      className='px-4 py-2 rounded-xl shadow-inner text-lg font-semibold bg-sky-50'
      type="number" 
      value={amount ? amount : ''} 
      onChange={(e) => dispatch(changeAmount(+e.target.value))}
    />
  )
}

export default Input
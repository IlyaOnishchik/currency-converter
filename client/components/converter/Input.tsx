import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeAmount } from '../../redux/slices/converterSlice'

const Input = () => {
  const { amount } = useAppSelector(state => state.converter)
  const dispatch = useAppDispatch()

  return (
    <input type="number" value={amount ? amount : ''} onChange={(e) => dispatch(changeAmount(+e.target.value))}/>
  )
}

export default Input
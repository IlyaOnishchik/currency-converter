import { ChangeEvent, FC } from 'react'

import { useCurrencies } from '../../hooks/useCurrencies'
import Loading from '../common/Loading'
import Error from '../common/Error'
import { Currency } from '../../types/Currency'

type SelectProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<SelectProps> = ({ value, onChange }) => {

  const { loading, error, data } = useCurrencies()
  
  if (loading) return <Loading/>
  if (error) return <Error error={error}/>
  const currencies = data.currencies

  return (
    <select value={value} onChange={onChange} className='text-lg font-semibold'>
      {currencies.map((item: Currency) => <option>{item.code}</option>)}
    </select>
  )
}

export default Select
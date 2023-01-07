import { useAppSelector } from '../../../redux/hooks'
import { Currency } from '../../../types/Currency'
import RatesItem from './RatesItem/RatesItem'

const RatesTableUnauthorized = () => {

  const { basicCurrency, defaultCurrencies } = useAppSelector(state => state.rates)

  return (
    <>
      <RatesItem currency={basicCurrency} isBasic={true}/>
      {defaultCurrencies.map((item: Currency) => <RatesItem key={item.id} currency={item}/>)}
    </>
  )
}

export default RatesTableUnauthorized
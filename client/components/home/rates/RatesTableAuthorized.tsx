import { Currency } from '../../../types/Currency'
import { changeBasicCurrency } from '../../../redux/slices/ratesSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import RatesItem from './RatesItem/RatesItem'
import Loading from '../../common/Loading'
import Error from '../../common/Error'

const RatesTableAuthorized = () => {
  
  const dispatch = useAppDispatch()
  const { basicCurrency, defaultBasicCurrency, defaultCurrencies } = useAppSelector(state => state.rates)

  const { loading, error, data } = useCurrentUser()
  if (loading) return <Loading/>
  if (error) return <Error error={error}/>
  if (data.currentUser.basicCurrency) dispatch(changeBasicCurrency(data.currentUser.basicCurrency))

  return (
    <>
      <RatesItem 
        isBasic={true}
        currency={basicCurrency}
        isFavorite={data.currentUser.favoriteCurrencies.find((item: Currency) => item.id === basicCurrency.id) ? true : false}
      />
      {data.currentUser.favoriteCurrencies
        .filter((item: Currency) => item.id !== basicCurrency.id)
        .map((item: Currency) => <RatesItem key={item.id} currency={item} isFavorite={true}/>)}
      {[...defaultCurrencies, basicCurrency, defaultBasicCurrency]
        .filter((otherItem: Currency) => ![...data.currentUser.favoriteCurrencies, basicCurrency].find((userItem: Currency) => userItem.id === otherItem.id))
        .map((item: Currency) => <RatesItem key={item.id} currency={item}/>)}
    </>
  )
}

export default RatesTableAuthorized
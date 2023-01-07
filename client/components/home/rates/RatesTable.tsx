import { useState } from 'react'
import { useAPI } from '../../../hooks/useAPI'
import { useCurrencies } from '../../../hooks/useCurrencies'
import { useCurrency } from '../../../hooks/useCurrency'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { Currency } from '../../../types/Currency'
import RatesItem from './RatesItem'

const RatesTable = () => {

  const [defaultBasicCurrency, setDefaultBasicCurrency] = useState('USD')
  const [defaultCurrencies, setDefaultCurrencies] = useState(['EUR', 'BYN', 'RUB', 'PLN', 'UAH'])

  const { loading: defaultBasicCurrencyLoading, data: defaultBasicCurrencyData } = useCurrency(defaultBasicCurrency)
  const { loading: defaultCurrenciesLoading, data: defaultCurrenciesData } = useCurrencies(defaultCurrencies)
  const { data: userData } = useCurrentUser()

  let otherCurrencies: Currency[] = []
  let userCurrencies: Currency[] = []
  if (userData) {
    otherCurrencies = [...defaultCurrenciesData.currencies, defaultBasicCurrencyData.currency]
    userCurrencies = [...userData.currentUser.favoriteCurrencies, userData.currentUser.basicCurrency]
    otherCurrencies = otherCurrencies.filter((otherItem: Currency) => !userCurrencies.find((userItem: Currency) => userItem.id === otherItem.id))
  }

  return (
    <>
      {
        userData ? (
          <>
            <RatesItem 
              currency={userData.currentUser.basicCurrency} 
              isBasic={true}
              isFavorite={userData.currentUser.favoriteCurrencies.find((item: Currency) => item.id === userData.currentUser.basicCurrency.id) ? true : false}
            />
            {userData.currentUser.favoriteCurrencies
              .filter((item: Currency) => item.id !== userData.currentUser.basicCurrency.id)
              .map((item: Currency) => <RatesItem key={item.id} currency={item} isFavorite={true}/>
            )}
            {otherCurrencies.map((item: Currency) => <RatesItem currency={item}/>)}
          </>
        ) : (
          <>
            {defaultBasicCurrencyData && <RatesItem currency={defaultBasicCurrencyData.currency} isBasic={true}/>}
            {defaultCurrenciesData && defaultCurrenciesData.currencies.map((item: Currency) => <RatesItem key={item.id} currency={item}/>)}
          </>
        )
      }
    </>
  )
}

export default RatesTable
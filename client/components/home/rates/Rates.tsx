import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { useToggleUserFavoriteCurrency } from '../../../hooks/useToggleUserFavoriteCurrency'
import { Currency } from '../../../types/Currency'
import RatesItem from './RatesItem'

const CURRENCY_QUERY = gql`
  query currency($code: String!) {
    currency(code: $code) { id code name symbol imageName }
  }
`

const CURRENCIES_QUERY = gql`
  query currencies($codes: [String!]) {
    currencies(codes: $codes) { id code name symbol imageName }
  }
`

const Rates = () => {

  const { data: basicCurrencyData } = useQuery(CURRENCY_QUERY, { variables: { code: 'USD' } })
  const { data: defaultCurrenciesData } = useQuery(CURRENCIES_QUERY, { variables: { codes: ['EUR', 'BYN', 'RUB', 'PLN', 'UAH'] } })
  const { data: userData } = useCurrentUser()

  let otherCurrencies: Currency[] = []
  let userCurrencies: Currency[] = []
  if (userData) {
    otherCurrencies = [...defaultCurrenciesData.currencies, basicCurrencyData.currency]
    userCurrencies = [...userData.currentUser.favoriteCurrencies, userData.currentUser.basicCurrency]
    otherCurrencies = otherCurrencies.filter((otherItem: Currency) => !userCurrencies.find((userItem: Currency) => userItem.id === otherItem.id))
  }

  const { toggle } = useToggleUserFavoriteCurrency()

  return (
    <div className='flex-auto | flex flex-col | max-w-[600px] gap-10 p-5 | shadow-xl rounded-xl bg-white'>
      <h1 className='text-center text-2xl font-bold'>LIVE EXCHANGE RATES</h1>
      <div className='flex flex-col | gap-5'>
        <div className='flex | gap-5'>
          <div className='flex-auto | px-3 | text-lg font-bold'>Currency</div>
          <div className='basis-1/5 | text-center text-lg font-bold'>Amount</div>
          <div className='basis-8'></div>
        </div>
        {
          userData ? (
            <>
              <RatesItem 
                currency={userData.currentUser.basicCurrency} 
                isBasic={true}
                isFavorite={userData.currentUser.favoriteCurrencies.find((item: Currency) => item.id === userData.currentUser.basicCurrency.id) ? true : false}
                onToggleFavorite={() => toggle(userData.currentUser.basicCurrency.id)}/>
              {userData.currentUser.favoriteCurrencies.filter((item: Currency) => item.id !== userData.currentUser.basicCurrency.id).map((item: Currency) => 
                <RatesItem 
                currency={item} 
                isFavorite={true}
                onToggleFavorite={() => toggle(item.id)}/>
              )}
              {otherCurrencies.map((item: Currency) => 
                <RatesItem 
                currency={item}
                onToggleFavorite={() => toggle(item.id)}/>
              )}
            </>
          ) : (
            <>
              {basicCurrencyData && <RatesItem currency={basicCurrencyData.currency} isBasic={true} onToggleFavorite={() => alert('Please sign in')}/>}
              {defaultCurrenciesData && defaultCurrenciesData.currencies.map((item: Currency) => <RatesItem currency={item} onToggleFavorite={() => alert('Please sign in')}/>)}
            </>
          )
        }
      </div>
    </div>
  )
}

export default Rates
import { FC } from 'react'

import { useRound } from '../../../../hooks/useRound'
import { useLiveQuery } from '../../../../redux/api/converterApi'
import { useAppSelector } from '../../../../redux/hooks'
import Error from '../../../common/Error'
import Loading from '../../../common/Loading'

type RatesItemAmountProps = {
  isBasic?: boolean
  code: string
  symbol: string
}

const RatesItemAmount: FC<RatesItemAmountProps> = ({ isBasic, code, symbol }) => {

  const { round } = useRound()

  const { basicCurrency, defaultBasicCurrency, defaultCurrencies } = useAppSelector(state => state.rates)

  const { data, error, isLoading } = useLiveQuery({ basicCurrencyCode: basicCurrency.code, currenciesCodes: [...defaultCurrencies, defaultBasicCurrency].map(item => item.code) })
  if (isLoading) return <Loading/>
  // if (error) return <Error error={error}/>
  if (error) return <div>Error</div>

  return (
    <>
      {data && 
        <div className='basis-2/5 | text-center font-semibold'>{isBasic ? 1 : round(data.quotes[data.source + code])} {symbol}</div>}
    </>
  )
}

export default RatesItemAmount
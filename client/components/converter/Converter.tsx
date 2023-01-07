import React, { ChangeEvent } from 'react'
import { useConvertQuery } from '../../redux/api/converterApi'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeFrom, changeTo } from '../../redux/slices/converterSlice'
import Loading from '../common/Loading'
import Input from './Input'
import Select from './Select'

const Converter = () => {

  const { amount, from, to } = useAppSelector(state => state.converter)
  const dispatch = useAppDispatch()

  const handleChangeFrom = (e: ChangeEvent<HTMLSelectElement>) => { dispatch(changeFrom(e.target.value)) }
  const handleChangeTo = (e: ChangeEvent<HTMLSelectElement>) => { dispatch(changeTo(e.target.value)) }
  
  // const { data, isLoading } = useConvertQuery({ from, to, amount })
  // const result = data.result

  return (
    <section>
      <div className='container | flex justify-center items-center | h-full'>
        <div>
          <div>
            <Input/>
            <Select value={from} onChange={handleChangeFrom}/>
            <Select value={to} onChange={handleChangeTo}/>
          </div>
            {/*isLoading*/false ? (
              <Loading/>
            ) : (
              <div>
                <div>{amount} {from} = {/*result*/1} {to}</div>
                <div>1 {from} = {/*result/amount*/} {to}</div>
                <div>1 {to} = {/*amount/result*/} {from}</div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default Converter
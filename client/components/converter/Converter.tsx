import { ChangeEvent } from 'react'

import { useConvertQuery } from '../../redux/api/converterApi'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeFrom, changeTo } from '../../redux/slices/converterSlice'
import Loading from '../common/Loading'
import Input from './Input'
import Select from './Select'
import Result from './Result'
import ReverseButton from './ReverseButton'

const Converter = () => {

  const { amount, from, to } = useAppSelector(state => state.converter)
  const dispatch = useAppDispatch()

  const handleChangeFrom = (e: ChangeEvent<HTMLSelectElement>) => { dispatch(changeFrom(e.target.value)) }
  const handleChangeTo = (e: ChangeEvent<HTMLSelectElement>) => { dispatch(changeTo(e.target.value)) }
  
  const { data, error, isLoading } = useConvertQuery({ from, to, amount })
  console.log(data)

  return (
    <section className='h-full'>
      <div className='container | flex justify-center items-center | h-full'>
        <div className='flex-auto | flex flex-col text-center | max-w-[400px] p-5 gap-5 | rounded-xl shadow-xl bg-white'>
          <h1 className='text-2xl font-bold'>CONVERTER</h1>
          <div className='flex justify-between'>
            <Select value={from} onChange={handleChangeFrom}/>
            <ReverseButton/>
            <Select value={to} onChange={handleChangeTo}/>
          </div>
          <Input/>
          {isLoading ? <Loading/> : error ? <div>Error</div> : data && <Result result={data.result}/>}
        </div>
      </div>
    </section>
  )
}

export default Converter
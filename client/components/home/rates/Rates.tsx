import RatesTable from './RatesTable'

const Rates = () => {
  return (
    <div className='flex-auto | flex flex-col | max-w-[600px] gap-5 sm:gap-10 p-5 | shadow-xl rounded-xl bg-white'>
      <h1 className='text-center text-2xl font-bold'>LIVE EXCHANGE RATES</h1>
      <div className='flex flex-col | gap-3 sm:gap-5'>
        <div className='flex | gap-5'>
          <div className='flex-auto | px-3 | text-lg font-bold'>Currency</div>
          <div className='basis-2/5 | text-center text-lg font-bold'>Amount</div>
          <div className='basis-8'></div>
        </div>
        <RatesTable/>
      </div>
    </div>
  )
}

export default Rates
import React from 'react'
import Rates from './rates/Rates'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container | flex justify-center items-center | h-full py-5'>
        <Rates/>
      </div>
    </section>
  )
}

export default Home
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container py-3'>
        <div className='flex justify-center items-center | gap-5'>
          <span>© 2022 Ilya Onishchik</span>
          <Link href='https://github.com/IlyaOnishchik/currency-converter' target='_blank'>
            <img src='/github-mark.svg' alt="GitHub logo" width='24px'/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
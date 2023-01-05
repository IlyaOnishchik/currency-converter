import Link from 'next/link'
import { BanknotesIcon as BanknotesIconOutline } from '@heroicons/react/24/outline'
import { BanknotesIcon as BanknotesIconSolid } from '@heroicons/react/24/solid'

const Logo = () => {
  return (
    <Link href='/' className='flex justify-center items-center'>
      <BanknotesIconOutline className='w-10 h-10'/>
    </Link>
  )
}

export default Logo
import { useDisclosure } from '@chakra-ui/react'
import { ArrowLeftOnRectangleIcon, CalculatorIcon, IdentificationIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCurrentUser } from '../../../hooks/useCurrentUser'
import { useAuth } from '../../../lib/auth/useAuth'

import Button from '../../common/Button'
import AuthModal from './AuthModal'

const Actions = () => {

  const { signUp, signIn, signOut } = useAuth()

  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()

  const { data: userData } = useCurrentUser()

  return (
    <div className='flex items-center | gap-5'>
      <Link href='/converter'>
        <Button>
          <CalculatorIcon className='w-6 h-6'/>
        </Button>
      </Link>
      {
        userData ? (
          <Button onClick={signOut}>Sign out</Button>
        ) : (
          <>
            <Button onClick={onSignInOpen}>
              <ArrowLeftOnRectangleIcon className='block w-6 h-6 m-auto'/>
            </Button>
            <AuthModal title='Sign in' isOpen={isSignInOpen} onClose={onSignInClose} callback={signIn}/>
            <Button onClick={onSignUpOpen}>
              <IdentificationIcon className='block w-6 h-6 m-auto'/>
            </Button>
            <AuthModal title='Sign up' isOpen={isSignUpOpen} onClose={onSignUpClose} callback={signUp}/>
          </>
        )
      }
    </div>
  )
}

export default Actions
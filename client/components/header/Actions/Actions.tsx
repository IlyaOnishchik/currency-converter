import { useDisclosure } from '@chakra-ui/react'

import { useAuth } from '../../../lib/auth'
import Button from '../../common/Button'
import AuthModal from './AuthModal'

const Actions = () => {

  const { isSignedIn, signUp, signIn, signOut } = useAuth()

  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure()
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure()

  return (
    <div className='flex items-center | gap-5'>
      {
        isSignedIn() ? (
          <Button onClick={signOut}>Sign out</Button>
        ) : (
          <>
            <Button onClick={onSignInOpen}>Sign in</Button>
            <AuthModal title='Sign in' isOpen={isSignInOpen} onClose={onSignInClose} callback={signIn}/>
            <Button onClick={onSignUpOpen}>Sign up</Button>
            <AuthModal title='Sign up' isOpen={isSignUpOpen} onClose={onSignUpClose} callback={signUp}/>
          </>
        )
      }
    </div>
  )
}

export default Actions
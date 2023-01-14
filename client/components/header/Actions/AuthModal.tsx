import { FC } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

import AuthForm from './AuthForm'

type AuthModalProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  callback: (email: string, password: string) => Promise<void>,
}

const AuthModal: FC<AuthModalProps> = ({ title, isOpen, onClose, callback }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <AuthForm callback={callback} onClose={onClose} title={title}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
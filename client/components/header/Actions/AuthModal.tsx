import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { FC } from 'react'
import AuthForm from './AuthForm'

type AuthModalProps = {
  title: string
  isOpen: boolean
  onClose: () => void
  callback: any
}

const AuthModal: FC<AuthModalProps> = ({ title, isOpen, onClose, callback }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <AuthForm callback={callback} onClose={onClose}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
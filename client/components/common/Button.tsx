import React, { FC, ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='px-4 py-2 | transition-all rounded-xl shadow-xl hover:shadow-md font-semibold'>
      {children}
    </button>
  )
}

export default Button
import { FC } from "react"

type ErrorProps = {
  error: Error
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <div className='flex items-center justify-center | w-full h-full'>{error.message}</div>
  )
}

export default Error
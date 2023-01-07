import { FC } from "react"
import { useAppSelector } from "../../redux/hooks"

type ResultProps = {
  result: number
}

const roundToThree = (number: number) => Math.round(number * 1000) / 1000

const Result: FC<ResultProps> = ({ result }) => {
  const { amount, from, to } = useAppSelector(state => state.converter)

  return (
    <div className='text-lg'>
      <div className='font-bold'>{amount} {from} = {roundToThree(result)} {to}</div>
      <div>1 {from} = {roundToThree(result/amount)} {to}</div>
      <div>1 {to} = {roundToThree(amount/result)} {from}</div>
    </div>
  )
}

export default Result
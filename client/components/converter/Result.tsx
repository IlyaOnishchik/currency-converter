import { FC } from "react"

import { useRound } from "../../hooks/useRound"
import { useAppSelector } from "../../redux/hooks"

type ResultProps = {
  result: number
}

const Result: FC<ResultProps> = ({ result }) => {
  const { amount, from, to } = useAppSelector(state => state.converter)
  const { round } = useRound()

  return (
    <div className='text-lg'>
      <div className='font-bold'>{amount} {from} = {round(result)} {to}</div>
      <div>1 {from} = {round(result/amount)} {to}</div>
      <div>1 {to} = {round(amount/result)} {from}</div>
    </div>
  )
}

export default Result
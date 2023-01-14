import { useCurrentUser } from '../../../hooks/useCurrentUser'
import RatesTableAuthorized from './RatesTableAuthorized'
import RatesTableUnauthorized from './RatesTableUnauthorized'

const RatesTable = () => {

  const { data: userData } = useCurrentUser()

  return (
    <>
      {userData ? <RatesTableAuthorized/> : <RatesTableUnauthorized/>}
    </>
  )
}

export default RatesTable
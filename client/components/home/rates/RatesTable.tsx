import { useAuth } from '../../../lib/auth'
import RatesTableAuthorized from './RatesTableAuthorized'
import RatesTableUnauthorized from './RatesTableUnauthorized'

const RatesTable = () => {

  const { isSignedIn } = useAuth()

  return (
    <>
      {isSignedIn() ? <RatesTableAuthorized/> : <RatesTableUnauthorized/>}
    </>
  )
}

export default RatesTable
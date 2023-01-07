import { gql, useMutation } from "@apollo/client"

import { CURRENT_USER_QUERY } from "./useCurrentUser"

const SET_USER_BASIC_CURRENCY_MUTATION = gql`
  mutation setUserBasicCurrency($currencyId: String!) {
    setUserBasicCurrency(currencyId: $currencyId)
  }
`

export const useSetUserBasicCurrency = () => {
  const [useSetUserBasicCurrency] = useMutation(SET_USER_BASIC_CURRENCY_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }] })
  const set = (currencyId: string) => useSetUserBasicCurrency({ variables: { currencyId } })
  return { set }
}
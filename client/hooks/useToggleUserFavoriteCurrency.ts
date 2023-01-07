import { gql, useMutation } from "@apollo/client"
import { CURRENT_USER_QUERY } from "./useCurrentUser"

const TOGGLE_USER_FAVORITE_CURRENCY_MUTATION = gql`
  mutation toggleUserFavoriteCurrency($currencyId: String!) {
    toggleUserFavoriteCurrency(currencyId: $currencyId)
  }
`

export const useToggleUserFavoriteCurrency = () => {
  const [toggleUserFavoriteCurrency] = useMutation(TOGGLE_USER_FAVORITE_CURRENCY_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }] })
  const toggle = (currencyId: string) => toggleUserFavoriteCurrency({ variables: { currencyId } })
  return { toggle }
}
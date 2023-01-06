import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      id
      email
      basicCurrency { id code name symbol imageName }
      favoriteCurrencies { id code name symbol imageName }
    }
  }
`

export const useCurrentUser = () => useQuery(CURRENT_USER_QUERY)
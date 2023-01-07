import { gql, useQuery } from "@apollo/client"

export const CURRENCY_QUERY = gql`
  query currency($code: String!) {
    currency(code: $code) { id code name symbol imageName }
  }
`

export const useCurrency = (code: string) => useQuery(CURRENCY_QUERY, { variables: { code } })
import { gql, useQuery } from "@apollo/client";

export const CURRENCIES_QUERY = gql`
  query currencies($codes: [String!]) {
    currencies(codes: $codes) { id code name symbol imageName }
  }
`

export const useCurrencies = (codes?: string[]) => useQuery(CURRENCIES_QUERY, { variables: { codes } })
import { gql, useMutation } from "@apollo/client"

export const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(credentials: { email: $email, password: $password })
  }
`

export const useSignIn = (email: string, password: string) => useMutation(SIGN_IN_MUTATION, { variables: { email, password } })
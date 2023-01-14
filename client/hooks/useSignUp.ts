import { gql, useMutation } from "@apollo/client"

export const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(credentials: { email: $email, password: $password })
  }
`

export const useSignUp = (email: string, password: string) => useMutation(SIGN_UP_MUTATION, { variables: { email, password } })
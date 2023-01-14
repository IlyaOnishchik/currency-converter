import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { useEffect, useState } from "react"
import { SIGN_IN_MUTATION } from "../../hooks/useSignIn"
import { SIGN_UP_MUTATION } from "../../hooks/useSignUp"

export const useProvideAuth = () => {

  const [token, setToken] = useState<string | null>(null)

  let tokenLS: string | null = null
  if (typeof window !== "undefined") tokenLS = localStorage.getItem('access-token')
  useEffect(() => {
    setToken(tokenLS)
  }, [tokenLS])

  const getAuthHeaders = () => token ? { authorization: `Bearer ${token}` } : null

  const createApolloClient = () => {
    return new ApolloClient({
      link: new HttpLink({ uri: 'http://localhost:3001/graphql', headers: getAuthHeaders() }),
      cache: new InMemoryCache()
    })
  }

  const signIn = async (email: string, password: string) => {
    const result = await createApolloClient().mutate({ mutation: SIGN_IN_MUTATION, variables: { email, password } })
    if (result?.data?.signIn) {
      localStorage.setItem('access-token', result.data.signIn)
      setToken(result.data.signIn)
    }
  }
  
  const signUp = async (email: string, password: string) => {
    const result = await createApolloClient().mutate({ mutation: SIGN_UP_MUTATION, variables: { email, password } })
    if (result?.data?.signUp) {
      localStorage.setItem('access-token', result.data.signUp)
      setToken(result.data.signIn)
    }
  }

  const signOut = () => {
    localStorage.removeItem('access-token')
    setToken(null)
  }

  return { token, createApolloClient, signUp, signIn, signOut }
}
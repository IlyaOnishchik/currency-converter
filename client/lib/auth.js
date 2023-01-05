import { ApolloClient, ApolloProvider, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)

function useProvideAuth() {
  let tokenLC = null;
  if (typeof window !== "undefined") tokenLC = localStorage.getItem("token");

  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(tokenLC)
  }, [])

  const isSignedIn = () => token ? true : false

  const getAuthHeaders = () => token ? { authorization: `Bearer ${token}` } : null

  const createApolloClient = () => {
    return new ApolloClient({
      link: new HttpLink({ uri: 'http://localhost:3001/graphql', headers: getAuthHeaders() }),
      cache: new InMemoryCache()
    })
  }

  const signIn = async ({ email, password }) => {
    const client = createApolloClient()

    const SIGN_IN_MUTATION = gql`
      mutation signIn($email: String!, $password: String!) {
        signIn(credentials: { email: $email, password: $password })
      }
    `

    const result = await client.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: { email, password }
    })

    if (result?.data?.signIn) {
      setToken(result.data.signIn)
      localStorage.setItem('token', result.data.signIn)
    }
  }

  const signUp = async ({ email, password }) => {
    const client = createApolloClient()

    const SIGN_UP_MUTATION = gql`
      mutation signUp($email: String!, $password: String!) {
        signUp(credentials: { email: $email, password: $password })
      }
    `

    const result = await client.mutate({
      mutation: SIGN_UP_MUTATION,
      variables: { email, password }
    })

    if (result?.data?.signUp) {
      setToken(result.data.signUp)
      localStorage.setItem('token', result.data.signUp)
    }
  }

  const signOut = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  return { setToken, isSignedIn, createApolloClient, signIn, signUp, signOut }
}
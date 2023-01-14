import { ApolloProvider } from "@apollo/client"
import { FC, ReactNode } from "react"
import { authContext } from "./authContext"
import { useProvideAuth } from "./useProvideAuth"

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const authProviderValue = useProvideAuth()

  return (
    <authContext.Provider value={authProviderValue}>
      <ApolloProvider client={authProviderValue.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}
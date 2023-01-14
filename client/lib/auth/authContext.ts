import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { createContext } from "react";

type AuthContextValue = {
  token: string | null
  createApolloClient: () => ApolloClient<NormalizedCacheObject>
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const authContextValue: AuthContextValue = {
  token: null,
  createApolloClient: (): ApolloClient<NormalizedCacheObject> => { throw new Error('Function must be overridden') },
  signUp: (): Promise<void> => { throw new Error('Function must be overridden') },
  signIn: (): Promise<void> => { throw new Error('Function must be overridden') },
  signOut: (): void => { throw new Error('Function must be overridden') }
}

export const authContext = createContext(authContextValue)
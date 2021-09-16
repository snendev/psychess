import React from 'react';

import { subscribeToAuthState } from '../api/auth.ts'

type AuthState =
  | {loginState: 'pending'}
  | {loginState: 'logged-out'}
  | {loginState: 'logged-in'; userId: string}

type AuthHandle = AuthState

const AuthContext = React.createContext<AuthHandle | null>(null)

export function useAuthHandle(): AuthHandle {
  const value = React.useContext(AuthContext)
  if (value === null) throw new Error('useAuthHandle must be used inside an AuthProvider')
  return value
}

const initialAuthState: AuthState = {loginState: 'pending'}

interface AuthProviderProps {
  children: React.ReactNode
}

/**
 * Handles authentication and token storage.
 *
 * Attaches a provider with login and logout callbacks. Handles authenticating using
 * a token found in the device keychain and attaching/removing the token on login/logout.
 *
 * @props children
 */
export function AuthProvider({children}: AuthProviderProps): JSX.Element {
  const [authState, setAuthState] = React.useState<AuthState>(initialAuthState)

  React.useEffect(() => {
    subscribeToAuthState((user) => {
      if (user) setAuthState({ loginState: 'logged-in', userId: user.uid })
      else setAuthState({ loginState: 'logged-out' })
    })
  }, [])

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  )
}

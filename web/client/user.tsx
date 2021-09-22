import React from 'react';

import type { UserProfile } from '~/common/user/user.ts'

import { subscribeToAuthState } from './api/auth.ts'

type AuthState =
  | {loginState: 'pending'}
  | {loginState: 'logged-out'}
  | {loginState: 'logged-in'; userId: string; profile: UserProfile}

type UserHandle = AuthState

const AuthContext = React.createContext<UserHandle | null>(null)

export function useAuth(): UserHandle {
  const value = React.useContext(AuthContext)
  if (value === null) throw new Error('useAuth must be used inside an AuthProvider')
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
      if (user) {
        const profile = {...user, displayName: user.displayName.split(' ')[0]}
        setAuthState({ loginState: 'logged-in', userId: user.uid, profile })
      }
      else setAuthState({ loginState: 'logged-out' })
    })
  }, [])

  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  )
}

const UserContext = React.createContext<UserProfile | null>(null)

export function useUser(): UserProfile {
  const value = React.useContext(UserContext)
  if (value === null) throw new Error('useUser must be used inside a UserProvider')
  return value
}

interface UserProviderProps {
  profile: UserProfile
  children: React.ReactNode
}

export function UserProvider({children, profile}: UserProviderProps) {
  return (
    <UserContext.Provider value={profile}>
      {children}
    </UserContext.Provider>
  )
}

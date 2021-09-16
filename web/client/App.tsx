import React from 'react'

import assertNever from '~/common/assertNever.ts'

import LoadingPage from './pages/LoadingPage.tsx'
import GamePage from './pages/GamePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import { AuthProvider, useAuthHandle } from './user/auth.tsx'

function AuthRouter() {
  const auth = useAuthHandle()

  switch (auth.loginState) {
    case 'pending': return <LoadingPage />
    case 'logged-out': return <LoginPage />
    case 'logged-in': return <GamePage />
    default: return assertNever(auth)
  }
}

export default function App() {
  return (
    <AuthProvider>
      <AuthRouter />
    </AuthProvider>
  )
}

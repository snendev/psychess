import React from 'react'

import assertNever from '~/common/assertNever.ts'

import Loading from './components/Loading.tsx'
import GamePage from './page/GamePage.tsx'
import LoginPage from './page/LoginPage.tsx'
import { AuthProvider, useAuthHandle } from './user/auth.tsx'

function AuthRouter() {
  const auth = useAuthHandle()

  switch (auth.loginState) {
    case 'pending': return <Loading />
    case 'logged-out': return <LoginPage />
    case 'logged-in': return <GamePage />
    default: return assertNever(auth)
  }
}

export default function App() {
  return (
    <AuthProvider>
      <main className="main">
        <AuthRouter />
      </main>
    </AuthProvider>
  )
}

import React from 'react'
import GoogleButton from 'react-google-button'

import { loginGoogle } from '../api/auth.ts'

// https://developers.google.com/identity/branding-guidelines
// https://developers.google.com/identity/sign-in/web/sign-in
function GoogleLoginButton() {
  const onClick = React.useCallback(() => {
    loginGoogle()
  }, [])

  return (
    <GoogleButton onClick={onClick} />
  )
}

export default function LoginPage() {
  return (
    <React.Fragment>
      <div>
        <GoogleLoginButton />
      </div>
    </React.Fragment>
  )
}

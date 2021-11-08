import {initializeApp} from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

const app = initializeApp({
  apiKey: "AIzaSyDlfT3HNpetwqcvbEMy_INU-O8NNjOjX0Y",
  authDomain: "psychess-e2fe8.firebaseapp.com",
  projectId: "psychess-e2fe8",
  storageBucket: "psychess-e2fe8.appspot.com",
  messagingSenderId: "553909107236",
  appId: "1:553909107236:web:1908f0acc30fdb6e00f6b1"
})

const auth = getAuth(app)

// auto-login
export function subscribeToAuthState(handleUser: (user: {uid: string; displayName: string} | null) => void) {
  return onAuthStateChanged(auth, handleUser)
}

///
/// Email/password
///

export async function registerBasic(email: string, password: string) {
  const user = await createUserWithEmailAndPassword(auth, email, password)
}

export async function loginBasic(email: string, password: string): Promise<string | null> {
  const credentials = await signInWithEmailAndPassword(auth, email, password)
  return credentials.user?.uid ?? null
}

///
/// Google
///

export async function loginGoogle(): Promise<string> {
  // @ts-ignore deno does not recognize firebase.auth the way it is imported, but it exists
  const provider = new GoogleAuthProvider();
  const {accessToken, credential, user} = await signInWithPopup(auth, provider)
  return user.uid
}

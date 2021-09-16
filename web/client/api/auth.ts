import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDlfT3HNpetwqcvbEMy_INU-O8NNjOjX0Y",
  authDomain: "psychess-e2fe8.firebaseapp.com",
  projectId: "psychess-e2fe8",
  storageBucket: "psychess-e2fe8.appspot.com",
  messagingSenderId: "553909107236",
  appId: "1:553909107236:web:1908f0acc30fdb6e00f6b1"
})

const auth = app.auth()

// auto-login
export function subscribeToAuthState(handleUser: (user: {uid: string} | null) => void) {
  return auth.onAuthStateChanged(handleUser)
}

///
/// Email/password
///

export async function registerBasic(email: string, password: string) {
  const user = await auth.createUserWithEmailAndPassword(email, password)
}

export async function loginBasic(email: string, password: string): Promise<string | null> {
  const credentials = await auth.signInWithEmailAndPassword(email, password)
  return credentials.user?.uid ?? null
}

///
/// Google
///

export async function loginGoogle(): Promise<string> {
  // @ts-ignore deno does not recognize firebase.auth the way it is imported, but it exists
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const {accessToken, credential, user} = await auth.signInWithPopup(provider)
    return user.uid
  } catch (e) {
    throw e
  }
}

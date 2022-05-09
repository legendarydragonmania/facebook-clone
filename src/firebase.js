import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBNUYFjGBs2qnvcelz0-92lhf1SV86bryk',
  authDomain: 'facebook-clone-838d3.firebaseapp.com',
  projectId: 'facebook-clone-838d3',
  storageBucket: 'facebook-clone-838d3.appspot.com',
  messagingSenderId: '7412990492',
  appId: '1:7412990492:web:685ce9a67232a2af3d95d9',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider, db}

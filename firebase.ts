// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy7fcqJNeSFoFFsdflKP3ueZXqb5XJDOw",
  authDomain: "netflix-clone-cbe69.firebaseapp.com",
  projectId: "netflix-clone-cbe69",
  storageBucket: "netflix-clone-cbe69.appspot.com",
  messagingSenderId: "322228428125",
  appId: "1:322228428125:web:f7060df754c599591c9cb4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
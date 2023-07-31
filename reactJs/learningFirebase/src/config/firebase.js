import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBWYPJfxhkrEXC4Ai32RW1VUCvPQXps2s4",
  authDomain: "learningfirebase-leto.firebaseapp.com",
  projectId: "learningfirebase-leto",
  storageBucket: "learningfirebase-leto.appspot.com",
  messagingSenderId: "264977306312",
  appId: "1:264977306312:web:98f07f27ea291a0d3a0bfd",
  measurementId: "G-NVXF9Y4PFE"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, googleProvider, db, storage}
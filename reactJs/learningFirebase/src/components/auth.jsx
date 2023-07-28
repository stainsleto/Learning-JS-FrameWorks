import {useState} from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const Auth = () =>{
    const [email,setEmail] = useState("")
    const [password,setPassowrd] = useState("")

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }
        catch (err){
            console.error(err)
        }
    }

    const signInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth, googleProvider)
        }
        catch(err){
            console.error(err)
        }
    }

    const logout = async () =>{
        try {
            await signOut(auth)
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div className='signup'>
            <input 
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='password'  
            value={password}
            onChange={(e) => setPassowrd(e.target.value)} />
            <button onClick={signIn}>Signin</button>
            <button onClick={signInWithGoogle}>SignIn with Google </button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
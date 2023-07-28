import { useEffect, useState } from 'react'
import './App.css'
import { Auth } from './components/auth'
import { db } from './config/firebase'
import {getDocs, collection} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])
  
  const movieCollectionRef = collection(db,"movie")

  useEffect( ()=>{
    const getMovieList = async() =>{
      try {
        const data = await getDocs(movieCollectionRef)
        const filteredData = data.docs.map((doc) => (
         
          {
            ...doc.data(), 
            id: doc.id
          }
        
        ))
        setMovieList(filteredData)
        console.log(filteredData)
      }
      catch(err){
        console.error(err)
      }
    }

    getMovieList()
  }, [])
  
  return (
    <>
      <Auth />
      <div>
        {movieList.map( (movie,index) => (
          <div key={index}>
            <h1> title : {movie.title}</h1>
            <p>Movie Year : {movie.release} </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App

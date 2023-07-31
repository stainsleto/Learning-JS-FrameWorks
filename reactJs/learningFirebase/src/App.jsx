import { useEffect, useState } from 'react'
import './App.css'
import { Auth } from './components/auth'
import { db, auth } from './config/firebase'
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])

  // new movie states 

  const [movieTitle,setMovieTitle] = useState("");
  const [newReleaseDate,setNewReleaseDate] = useState(0);
  const [isNewMovie,setIsNewMovie] = useState(false);
  const [updatedTitle,setUpdatedTitle] = useState("")
  
  const movieCollectionRef = collection(db,"movie")

  const onSubmitMovie = async () =>{
    try{
      await addDoc(movieCollectionRef, {
        title : movieTitle,
        release : newReleaseDate,
        oscar : isNewMovie,
        userId : auth?.currentUser?.uid, 
      })

      getMovieList()
    }
    catch(err){
      console.error(err)
    }
    
  }

  const deleteMovie = async (id) =>{
    try{
      const movieDoc = doc(db, "movie" ,id)
      await deleteDoc(movieDoc );
      getMovieList()
    }
    catch(err){
      console.error(err)
    }
  }

  const updateMovie = async (id) =>{
    try{
      const movieDoc = doc(db, "movie" ,id)
      await updateDoc(movieDoc, {title: updatedTitle} );
      getMovieList()
    }
    catch(err){
      console.error(err)
    }
  }

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

  useEffect( ()=>{
    getMovieList()
  }, [])
  
  return (
    <>
      <Auth />
      <div id='movie-entry'>
        <input 
        placeholder="Movie Title"
        value = {movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)} 
        />

        <input 
        placeholder="Release Date" 
        type="number"
        value={newReleaseDate}
        onChange={(e) => setNewReleaseDate(e.target.value)} 
         />

        <input 
        type='checkbox'
        checked={isNewMovie}
        onChange={(e) => setIsNewMovie(e.target.checked)} 
        />

        <label>Received Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>

      </div>
      <div id="movie">
        {movieList.map( (movie) => (
          <div key={movie.id}>
            <h1> title : {movie.title}</h1>
            <p>Movie Year : {movie.release} </p>
            <button onClick={()=> deleteMovie(movie.id)}>Delete</button>
            <input placeholder='New movie title' onChange={(e) => setUpdatedTitle(e.target.value)} />
            <button onClick={ () => updateMovie(movie.id) }>Update title </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App


import './App.css'
import { useGetBooksQuery } from './features/api/bookSlice'
import { BookSingle } from './features/api/bookSlice'

function App() {

  const { data, isLoading }  = useGetBooksQuery()

  if(isLoading){
    return <p>Loading...</p>
  }

  return (
      <>

      { data?.books.map( (book :BookSingle ) => (
        <p key={book.ISBN}>{book.title} </p>
      ))}
        
      </>
  )
}

export default App

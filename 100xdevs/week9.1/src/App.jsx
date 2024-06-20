import './App.css'
import DataFetching from './hooks/DataFetching'
import AutoRefreshing from './hooks/AutoRefreshing'

function App() {

  return (
    <>
      < DataFetching />

      Auto Refreshing --
      <AutoRefreshing />
    </>
  )
}

export default App

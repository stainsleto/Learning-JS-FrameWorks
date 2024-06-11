import { Suspense,lazy, memo } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const  Landing   = lazy(() => import('./components/Landing'))
const Dashboard  = lazy(() => import('./components/Dashboard'))
const ContextApi = lazy(() => import('./components/ContextApi'))


function App() {
  
  return (
    <>
    <BrowserRouter> 
      <Appbar />
      <Routes>
        <Route path="/" element={<Suspense fallback={"loading.."}><Landing /> </Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={"loading.."}><Dashboard /> </Suspense>} />
        <Route path="/contextapi" element={<Suspense fallback={"loading.."}><ContextApi /> </Suspense>} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

const Appbar = memo( ()=> {
  const navigate = useNavigate()

  return(
    <div>
        <button onClick={ ()=> {navigate('/')}}>Landing</button> 
        <button onClick={ ()=> {navigate('dashboard')}}>Dashboard</button>
        <button onClick={ ()=> {navigate('contextapi')}}>ContextApi</button>
    </div>
  )

}
)

export default App

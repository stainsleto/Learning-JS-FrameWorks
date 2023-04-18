import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {    
    return (
        <div>
            
            <BrowserRouter>
            <Header />
              <Routes>
                <Route exact path='/' element={<Photos />} />
                <Route exact path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
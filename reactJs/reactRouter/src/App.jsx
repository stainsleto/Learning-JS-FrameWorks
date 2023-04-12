import React from "react"
import Home from "./Home"
import Products from "./Products"
import {BrowserRouter,  Routes, Route } from 'react-router-dom'
import ProductDetail from "./ProductDetail"

function App() {    
    return (
        <div>

            <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:productId' element={<ProductDetail />} />
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default App


// import React from 'react'
// import Home from './pages/Home'
// import ServicesList from "./pages/services/servicesList"
// import ServiceDetail from "./pages/services/serviceDetail"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {

//   return (
//     <>
//       <BrowserRouter >
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route  exact path="/services" element={<ServicesList />} />
//           <Route path="/services/:serviceId"  element={<ServiceDetail />} />
//         </Routes>
//       </BrowserRouter>
      
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react' --------------------> useState Basic
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   function add(){
    
//       setCount(prev => (
//         prev+1
//       )
//     )
//   }

//   function dou(){
    
//     setCount(prev => (
//       prev*2
//     )
//   )
// }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={add}>Increment!</button>
//       <button onClick={dou}>Double!</button>
//     </div>
//   )
// }

// export default App


import React, {useState} from "react"

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    function handleChange(event) {
        const {name, value} = event.target;
        
        setInputData(prev => {
          return{
            ...prev,
            [name] : value

          }
        }
          
        )
    }


    
    function handleSubmit(event) {
      event.preventDefault()
        setContactsData(prev => [...prev,inputData])
    }

    const contacts = contactsData.map(data => <h1>{data.firstName} {data.lastName}</h1>)
    
    return (
      <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {contacts}
        </>
    )
}

export default App

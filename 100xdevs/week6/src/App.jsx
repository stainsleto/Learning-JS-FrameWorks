import { useState, useMemo } from 'react'
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(0)

let count = useMemo(() => { 

  let finalCount = 0
  for( let i =1 ; i <= input; i++){
    finalCount = finalCount + i
  }

  return finalCount

}, [input])

  return (
    <>
      <input type='number' value={input} onChange={ (e) => setInput(e.target.value) } />

      <p>Sum from 1 to {input} is {count}</p>

      <button onClick={() => setCounter(counter +1)}>Counter ({counter}) </button>
        
    </>
  )
}
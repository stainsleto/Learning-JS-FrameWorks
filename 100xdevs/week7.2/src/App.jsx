import './App.css'
import { countAtom, evenSelector } from "./store/atoms/count"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
        <EvenCountRenderer />
      </RecoilRoot>
    </>
  )
}

const Count = ()=> {
  return(
      <>
          <CountRenderer />
          <Buttons />
      </>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return(
      <h1>Count value is : {count}</h1>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return(
      <>
          <button onClick={ ()=> setCount(prev => prev+1)}>Increment</button>
          <button onClick={ ()=> setCount(prev => prev-1)}>Decrement</button>
      </>
  )
}

function EvenCountRenderer(){
  const oddOrEven = useRecoilValue(evenSelector)
  return(
    <h1>It is {oddOrEven ? 'odd' : 'even'}</h1>  
  )
}

export default App

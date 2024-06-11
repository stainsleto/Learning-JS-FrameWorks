import {useState, useContext} from "react"
import {CountContext} from "../context"

export default function ContextApi() {

    const [count, setCount] = useState(0)

    return(
        <>
            <CountContext.Provider value={{count, setCount}}>
                <Count />
            </CountContext.Provider>
        
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

    const {count} = useContext(CountContext)
    return(
        <h1>Count value is : {count}</h1>
    )
}

function Buttons() {
    const {setCount} = useContext(CountContext)
    return(
        <>
            <button onClick={ ()=> setCount(currentCount => currentCount+1)}>Increment</button>
            <button onClick={ ()=> setCount(currentCount => currentCount-1)}>Decrement</button>
        </>
    )
}
import React from 'react'

export default function Api(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    
    
    

    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    },[count])
    
    return (
        <div>
            <h2> This is count {count} </h2>
            <button onClick={()=> setCount(prevCount =>prevCount + 1)}>Get New Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
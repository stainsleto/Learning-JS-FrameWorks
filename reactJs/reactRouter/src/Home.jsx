import React from "react"
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <nav>
                <Link to='/'>Home</Link>
                <Link to ='/products'>Products</Link>
        </nav>
        <h1>Home Page</h1>
        </>
    )
}

export default Home
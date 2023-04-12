import React from "react"
import { Link } from "react-router-dom"
import productData from './productData'

function Products() {   
    const products = productData.map(item => (
        <div key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name} </Link> - ${item.price}

        </div>
    ))
    return (
        <>
        <nav>
                <Link to='/'>Home</Link>
                <Link to ='/products'>Products</Link>
        </nav>
        <h1>Products Page</h1>

        {products}

        </>
    )
}

export default Products
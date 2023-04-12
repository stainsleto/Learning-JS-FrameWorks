import React from 'react'
import { useParams, Link } from 'react-router-dom'
import productData from './productData'

export default function ProductDetail(props){
    const {productId} = useParams()
    console.log(productId)
    const thisProduct = productData.find(product => product.id === productId)
    return(
        <div>
            <h1>Product Detail Page</h1>
            <h3>{thisProduct.name} - ${thisProduct.price}</h3>
            <p>{thisProduct.description}</p>
            <Link to='/products'>Back</Link>
        </div>
    )
}
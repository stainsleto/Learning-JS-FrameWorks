import React, { useContext } from "react"
import Image from '../components/Image'
import { Context } from "../Context.jsx"
import {getClass} from '../utils/index'

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElement = allPhotos.map((img,i) =>{ 
        return(<Image key={img.id} id={img.id} url={img.url} className={getClass(i)} /> 
        )
    })


    return (
        <main className="photos">
            {imageElement}
        </main>
    )
}

export default Photos
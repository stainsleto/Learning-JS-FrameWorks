import React, {useState, useContext} from 'react'
import { Context } from '../Context'

function Image({className,url,id}){
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite } = useContext(Context)
    console.log(hovered)
    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(id)}></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
    return(
        <div  className={` ${className} image-container`} 
            onMouseEnter={() => setHovered(true)}  
            onMouseLeave={() => setHovered(false)}
        >
            <img src={url}className='image-grid' />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
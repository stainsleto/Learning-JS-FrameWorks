import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

function Image({className,url,id,isFav}){
    const [hovered, setHovered] = useState(false)
    const { toggleFavorite, addToCart, cartItems } = useContext(Context)

    function heartIcon() {
        if(isFav) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(id)}></i>
        }
    }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(id)}></i>
        }
    }
    
    return(
        <div  className={` ${className} image-container`} 
            onMouseEnter={() => setHovered(true)}  
            onMouseLeave={() => setHovered(false)}
        >
            <img src={url}className='image-grid' />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}


Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
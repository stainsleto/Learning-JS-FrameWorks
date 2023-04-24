import React,{useState, useContext} from 'react'
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHooks" // - creating bug -- custom hook

function CartItem({item}){
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover() // - creating bug -- custom hook
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return(
        <div className={iconClassName}>
            <i className="ri-delete-bin-line" 
                onClick={ ()=> removeFromCart(item.id)} 
                ref = {ref}  // - creating bug -- custom hook
                > 
            </i>

            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>

    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
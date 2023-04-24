import React,{useState, useContext} from "react"
import{Context} from '../Context'
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length 
    const totalCostDisplay = totalCost.toLocaleString("en-US",{style:"currency",currency:"USD"})
    const [buttonText, setButtonText] = useState('Place Order')
    const cartItemElement = cartItems.map(items =>  (
        <CartItem key={items.id} item={items} />
    )
    )
    


    function placeOrder(){
        setButtonText('Ordering...')
        setTimeout(() =>{
            console.log('Order Placed')
            setButtonText('Place Order')
            emptyCart()
        },3000)
    }

    console.log(cartItems)

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElement}
            <p className="total-cost">Total: {totalCostDisplay}</p>

            {
                cartItems.lenght > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> 
                :
                <p>You have no Items in the Cart</p>

                
            }
            
        </main>
    )
}

export default Cart
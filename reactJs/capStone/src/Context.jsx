import React , {useState, useEffect} from "react"

const Context = React.createContext()

 function ContextProvider({children}) {

    const [allPhotos,setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url ='https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    
    useEffect( ()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])

    function toggleFavorite(id){
        const updatedArr = allPhotos.map( photo => {
            if(photo.id === id ){
                console.log(!photo.isFavorite)
                return{
                    ...photo,
                    isFavorite : !photo.isFavorite,
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem){
        setCartItems(prev => [...prev,newItem])

    }

    function removeFromCart(id){
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    console.log(cartItems)

    function emptyCart(){
        setCartItems([])
    }
    


    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
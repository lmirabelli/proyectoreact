import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (ProdAdd) => {
        if(!inCart(ProdAdd.id)){
            setCart([...cart, ProdAdd])
        }else{
            const cartUpdate = cart.map(prod => {
                if(prod.id === ProdAdd.id){
                    const prodUpdate = {
                        ...prod, quantity: ProdAdd.quantity
                    }
                    return prodUpdate
                }
                else{
                        return prod
                    
                }
            })
            setCart(cartUpdate)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const CartFilter = cart.filter(prod => prod.id !== id)
        setCart(CartFilter)
    }

    const inCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const quantityProduct = () => {

        let qtProduct = 0;


        cart.forEach(prod => {
            qtProduct += prod.quantity

        })

        return qtProduct
    }

    const totalCash = () => {

        let totalAmount = 0;

        cart.forEach(prod => {
            totalAmount += parseInt(prod.precio) * prod.quantity
        })
        return totalAmount
    }



    const searchProduct = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    return (

        <CartContext.Provider value={{ cart, addItem, quantityProduct, totalCash, inCart, removeItem, clearCart, searchProduct}}>
            { children }
            </CartContext.Provider>
    )
}

export default CartContext
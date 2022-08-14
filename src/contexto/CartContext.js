import { useState, createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const agregarItem = (ProdAdd) => {
        if(!inCart(ProdAdd.id)){
            console.log({ProdAdd})
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

    const cantidad = () => {

        let suma = 0;


        cart.forEach(prod => {
            suma += prod.quantity

        })

        return suma
    }

    const totalCash = () => {

        let precioTotal = 0;

        cart.forEach(prod => {
            precioTotal += parseInt(prod.precio) * prod.quantity
            console.warn(precioTotal)
        })
        return precioTotal
    }

//     const carritoPage = () => {

//         cart.forEach(prod => {
//             console.log(prod)
//             <>
//             <div></div>
//             </>
//         }
//             )
//     }
//   carritoPage()



    const cantProduct = (id) => {
        const producto = cart.find(prod => prod.id === id)

        return producto?.quantity
    }
    return (

        <CartContext.Provider value={{ cart, agregarItem, cantidad, totalCash, inCart, removeItem, clearCart, cantProduct}}>
            { children }
            </CartContext.Provider>
    )
}

export default CartContext
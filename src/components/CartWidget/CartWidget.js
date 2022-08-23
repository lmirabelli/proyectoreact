import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../contexto/CartContext'


const CartWidget = () => {

    const { quantityProduct, totalCash } = useContext(CartContext)

    const quantity = quantityProduct();
    const total = totalCash();


    return(
        quantity > 0 && (
            <Link to='/cart' className="cart">
            <img src='https://i.ibb.co/YLr9Q0r/carrito.png' alt='CartWidget' />
            <p className='cantidad'>{ quantity }</p>
            <p className='total'>{`${ total } €`}</p>
        </Link>
       )
    )
}

export default CartWidget
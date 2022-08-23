import './CartDiv.css'
import CartContext from "../../contexto/CartContext"
import { useContext} from "react"
import { Link } from 'react-router-dom'

const CartDiv = () =>  {
    
    const { cart, removeItem, clearCart, quantityProduct, totalCash } = useContext(CartContext)

    let prodInCart = quantityProduct()
    let totally = totalCash()
    console.log(prodInCart)





    return(
      <div className='carrito'>
            <div className='prodIndividual'>
            <div>Cantidad</div>
            <div className='divImg'>Imagen</div>
            <div className='divDescripcion'>Descripcion</div>
            <div className='divCash'>P.Unit.</div>
            <div className='divCash'>Subtotal</div>
            <div className='divCash'>Subtotal AR$</div>
            <div></div>
            </div>
          {prodInCart === 0 && <div className='carroVacio'>No hay camisetas en el carrito</div>}
        {cart.map(prod => <div key={prod.id} className="prodIndividual">
          <div>{prod.quantity} {prod.quantity > 1 ? 'Unidades' : 'Unidad'}</div>
          <div className='divImg'><img src={prod.img} alt={prod.descripcion}/></div>
          <div className='divDescripcion'>{prod.quantity > 1 ? 'Camisetas' : 'Camiseta'} de {prod.descripcion}</div>
          <div className='divCash'>{prod.precio} €</div>
          <div className='divCash'>{prod.precio * prod.quantity} €</div>
          <div className='divCash'>AR$ {(prod.precio * prod.quantity*310)}</div>
          <button onClick={() => removeItem(prod.id)} >remover</button>
          </div>)}
          <div className='pieCarrito'>
          {prodInCart > 0 ? <button onClick={() => clearCart()}>Vaciar Carrito</button> : <Link to="/">Volver al Catalogo</Link>}
          <div> Cantidad de Productos: {prodInCart} {prodInCart === 1 ? 'Camiseta' : 'Camisetas'}</div>
          <div> Total de Compra: {totally} € / AR$ {totally * 310}</div>
          <Link to="/check">Finalizar Compra</Link>
          </div>
      </div>
    )
  }

export default CartDiv
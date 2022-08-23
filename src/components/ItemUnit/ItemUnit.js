import './ItemUnit.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import ProdCounter from '../Contador/Contador'
import CartContext from '../../contexto/CartContext'



const ItemUnit = ({ id, descripcion, img, precio, marca, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, searchProduct } = useContext(CartContext)

    const clickOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const addProduct = {
            id, marca, precio, quantity, descripcion, img
        }

        addItem(addProduct)
    }
    const cantidadProductos = searchProduct(id)
    const click = (e) => {
        e.stopPropagation()
    }

    let quantityStock = () => stock === 0 ? 'Sin Stock' : stock > 10 ? 'Hay stock' : 'Quedan pocas';
    let classStock = () => stock > 10 ? 'muchas' : 'pocas';

    return (
        <div className='ItemUnitario' onClick={click}>
            <img src={img} alt='' />
            <div className='DescripcionProducto'>
                <h2>{descripcion}</h2>
                <p>Marca: {marca}</p>
                <p>Precio: {precio} € / AR${precio * 310}</p>
                <p className={classStock()}>{quantityStock()}</p>
                {stock > 0 && (quantityToAdd === 0 ? (
                    <ProdCounter onAdd={clickOnAdd} stock={stock} initial={cantidadProductos} />) : (<Link to="/cart">Finalizar Compra</Link>)
                    )
                }
            </div>
        </div>
    )
}

export default ItemUnit
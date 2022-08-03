import './ItemUnit.css'
import { Link } from 'react-router-dom'

const ItemUnit =({descripcion, img, precio, marca, stock}) => {

    let cantidad = () => stock === 0 ? 'Sin Stock' : stock > 10 ? 'Hay stock' : 'Quedan pocas';
    let etq = () => stock > 10 ? 'muchas' : 'pocas';

    return (
        <div className='ItemUnitario'>
            <img src={img} alt='' />
            <div className='DescripcionProducto'>
                <h2>{descripcion}</h2>
                <p>Marca: {marca}</p>
                <p>Precio: {precio} € / AR${precio * 310}</p>
                <p className={etq()}>{cantidad()}</p>
                {stock > 0 && <Link to={'/'} className="botonCarrito">Añadir al Carrito</Link>}
            </div>
        </div>
    )
}

export default ItemUnit
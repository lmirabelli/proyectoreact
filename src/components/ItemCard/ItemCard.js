import './ItemCard.css'
import { Link } from 'react-router-dom'

const Item = ({id, precio, img, descripcion}) => {


    return (
        <div className='card'>
            <img src={img} alt={''} />
            <div>
            <p className='tituloCasaca'>{descripcion} </p>
            <p className='money'>{precio} €</p>
            </div>
            <Link to={`/casaca/${id}`} className="detalles">mas detalles</Link>
        </div>
    )
}


export default Item
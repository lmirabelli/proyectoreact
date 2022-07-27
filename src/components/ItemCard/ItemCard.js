import './ItemCard.css'

const Item = ({product}) => {
    console.log(product.descripcion)
    return (
        <div className='card'>
            <img src={product.img} alt={''} />
            <div>
            <p className='tituloCasaca'>{product.descripcion} </p>
            <p className='money'>{product.precio} €</p>
            </div>
            <button>mas detalles</button>
        </div>
    )
}


export default Item
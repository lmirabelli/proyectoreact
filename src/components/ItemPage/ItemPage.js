import './ItemPage.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../casacas'
import ItemUnit from '../ItemUnit/ItemUnit'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemUnitContainer = () => {
    const [product, setProduct] = useState()

    const { shirtId } = useParams()

    useEffect(() => {
        getProductById(shirtId)
        .then(product => {
            setProduct(product)
        })
        .catch(error => {
            console.log(error)
        })

    },[])

    return(
        <div className='containerItem'>
            <Link to={'/'} className="backToTheCatalogo">Volver al catalogo</Link>
            <ItemUnit {...product} />
        </div>
    )
}


export default ItemUnitContainer
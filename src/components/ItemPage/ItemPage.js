import './ItemPage.css'
import { useState, useEffect } from 'react'
import ItemUnit from '../ItemUnit/ItemUnit'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../services/firebase'

const ItemUnitContainer = () => {
    const [product, setProduct] = useState()

    const { shirtId } = useParams()

    useEffect(() => {
        getDoc(doc(database, 'products', shirtId)).then(Response => {
            const dataShirt = Response.data()
            const impoShirt = {id: Response.id, ...dataShirt}
            setProduct(impoShirt)
        }).catch(error => console.log(error))

    },[shirtId])

    return(
        <div className='containerItem'>
            <Link to={'/'} className="backToTheCatalogo">Volver al catalogo</Link>
            <ItemUnit {...product} />
        </div>
    )
}


export default ItemUnitContainer
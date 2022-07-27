import './Catalogo.css'
import { useState, useEffect } from 'react'
import { stockCamisetas } from '../../casacas'
import Item from '../ItemCard/ItemCard'

const CatalogoCasacas = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        stockCamisetas().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <div className='expo'>
            {products.map(prod => <Item key={prod.id} product={prod} />)}
        </div>
    )
}

export default CatalogoCasacas
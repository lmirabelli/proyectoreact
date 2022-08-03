import './Catalogo.css'
import { useState, useEffect } from 'react'
import { stockCamisetas, filtroCamisetas } from '../../casacas'
import Item from '../ItemCard/ItemCard'
import { useParams } from 'react-router-dom'

const CatalogoCasacas = () => {

    const [products, setProducts] = useState([]);

    const  { categoryId } = useParams()
    let FiltroTitulo = categoryId ? categoryId : 'Todas las camisetas';
    FiltroTitulo = FiltroTitulo.replace('primeraArgentina','Primera Argentina')
    FiltroTitulo = FiltroTitulo.replace('seleccion','Selecciones Nacionales')
    FiltroTitulo = FiltroTitulo.replace('premier','Premier League')
    FiltroTitulo = FiltroTitulo.replace('laliga','La Liga española')
    FiltroTitulo = FiltroTitulo.replace('ascenso','Ascenso del futbol argentino')
    FiltroTitulo = FiltroTitulo.replace('ligue','Ligue 1 de Francia')
    FiltroTitulo = FiltroTitulo.replace('otros','Resto del mundo')
    FiltroTitulo = FiltroTitulo.replace('serieA','Serie A italiana')



    useEffect(() => {

        const asyncFunction = categoryId ? filtroCamisetas : stockCamisetas;

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.warn(error)
        }
        )}, [categoryId]);

    return (
        <div className='expo'>
            <h1 className='tituloCatalogo'>{ FiltroTitulo }</h1>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default CatalogoCasacas
import './Catalogo.css'
import { useState, useEffect } from 'react'
import Item from '../ItemCard/ItemCard'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { database } from '../../services/firebase'

const CatalogoCasacas = () => {

    const [products, setProducts] = useState([]);

    const  { categoryId } = useParams()

    // FILTRO EN EL TITULO DE LAS CATEGORIAS


    let FiltroTitulo = categoryId ? categoryId : 'Todas las camisetas';
    FiltroTitulo = FiltroTitulo.replace('primeraArgentina','Primera Argentina')
    FiltroTitulo = FiltroTitulo.replace('seleccion','Selecciones Nacionales')
    FiltroTitulo = FiltroTitulo.replace('premier','Premier League')
    FiltroTitulo = FiltroTitulo.replace('laliga','La Liga española')
    FiltroTitulo = FiltroTitulo.replace('ascenso','Ascenso del futbol argentino')
    FiltroTitulo = FiltroTitulo.replace('ligue','Ligue 1 de Francia')
    FiltroTitulo = FiltroTitulo.replace('otros','Resto del mundo')
    FiltroTitulo = FiltroTitulo.replace('serieA','Serie A italiana')

    // -----------------------------------------

        // IMPORTACION DE BASE DE DATOS (FIREBASE)

    useEffect(() => {

            const filtroCatalogo = !categoryId ? collection(database, 'products') : query(collection(database, 'products'), where('categoria','==',categoryId))
            
           
            getDocs(filtroCatalogo).then( response => {
            const impoProducts = response.docs.map(doc => {
                const impoData = doc.data()
                return {id: doc.id, ...impoData}
                
            })
            setProducts(impoProducts)
        }).catch(error => console.warn(error))
        }, [categoryId]);

        //------------------------------------------

        // ACOMODANDO ITEMS ALFABETICAMENTE POR NOMBRE DE CLUBES

            products.sort((a, b) => {
                if(a.descripcion < b.descripcion){
                    return -1
                };
                if(a.descripcion > b.descripcion){
                    return 1
                }
                return 0
            })

        // -------------------------------------------------------

    return (
        <div className='expo'>
            <h1 className='tituloCatalogo'>{ FiltroTitulo }</h1>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default CatalogoCasacas
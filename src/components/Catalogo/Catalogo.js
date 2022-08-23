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


    let titleFilter = categoryId ? categoryId : 'Todas las camisetas';
    titleFilter = titleFilter.replace('primeraArgentina','Primera Argentina')
    titleFilter = titleFilter.replace('seleccion','Selecciones Nacionales')
    titleFilter = titleFilter.replace('premier','Premier League')
    titleFilter = titleFilter.replace('laliga','La Liga española')
    titleFilter = titleFilter.replace('ascenso','Ascenso del futbol argentino')
    titleFilter = titleFilter.replace('ligue','Ligue 1 de Francia')
    titleFilter = titleFilter.replace('otros','Resto del mundo')
    titleFilter = titleFilter.replace('serieA','Serie A italiana')

    // -----------------------------------------

        // IMPORTACION DE BASE DE DATOS (FIREBASE)

    useEffect(() => {

            const categoryFilter = !categoryId ? collection(database, 'products') : query(collection(database, 'products'), where('categoria','==',categoryId))
            
           
            getDocs(categoryFilter).then( response => {
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
            <h1 className='tituloCatalogo'>{ titleFilter }</h1>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default CatalogoCasacas
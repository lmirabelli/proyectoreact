import './Check.css'
import { useContext, useState } from "react"
import CartContext from "../../contexto/CartContext"
import { database } from "../../services/firebase"
import { addDoc, collection, query, where, documentId, writeBatch, getDocs } from "firebase/firestore"
import { Link } from "react-router-dom"


const CheckData = () => {
    const [checking, setChecking] = useState(false) // Comprobando si hay stock
    const [orderOk, setOrderOk] = useState(false) // si hay stock
    const [orderError, setOrderError] = useState(false) // no hay stock
    const [buyCode, setBuyCode] = useState('') //estado si hay stock
    const [nullStock, setNullStock] = useState('') // estado si no hay stock
    const [noData, setNoData] = useState('') // comprobacion de datos del formulario


    const { cart, totalCash, clearCart } = useContext(CartContext)
    let totalPay = totalCash() // total a pagar

    const finishBuy = async (e) => {
        e.preventDefault()
        isNaN(e.target.campusPhone.value) && setNoData('numero de telefono incorrecto')
        setTimeout(() => setNoData(''), 2500)
        if( e.target.campusFirstName.value !== '' && e.target.campusPhone.value !== '' &&  e.target.campusLastName.value !== '' && e.target.campusAdress.value  !== '' && e.target.campusCity.value !== '' && e.target.campusState.value !== '' && e.target.campusEmail.value !== '' ){
            try {
                const order = {
                    // Datos del comprador
                    buyer: {
                        name: e.target.campusFirstName.value,
                        surname: e.target.campusLastName.value,
                        adress: e.target.campusAdress.value,
                        phone: e.target.campusPhone.value,
                        city: e.target.campusCity.value,
                        state: e.target.campusState.value,
                        email: e.target.campusEmail.value,
                    },
                    items: cart,
                    total: totalPay,
                    date: new Date()
                }
    
                // constantes para comprobacion de stock
                const prodRef = collection(database, 'products')
                const getID = cart.map(p => p.id)
                const stockFirebase = await getDocs(query(prodRef, where(documentId(), 'in', getID)))
                const { docs } = stockFirebase
                const noStock = []
    
                const batch = writeBatch(database)
    
                docs.forEach(doc => {
                    const data = doc.data()
                    const stockDB = data.stock
    
                    const cartIn = cart.find(p => p.id === doc.id)
                    const cartQt = cartIn?.quantity
    
                    stockDB >= cartQt ? batch.update(doc.ref, { stock: stockDB - cartQt }) : noStock.push({ id: doc.id, ...data })
                })
                console.log(noStock.map(p => p.descripcion))
    
                if (noStock.length === 0) {
                    setChecking(true)
    
                    await batch.commit()
    
                    const orderRef = collection(database, 'orders')
                    const addOrder = await addDoc(orderRef, order)
                    setBuyCode(addOrder.id)
                    setTimeout(() => setChecking(false), setOrderOk(true), 1500)
    
                    clearCart();
                    return (<>
                        <h1>el numero de orden es {addOrder.id}</h1>
                        <Link to="/">Volver al catalogo</Link>
                    </>
                    )
    
    
                } else {
                    setNullStock(noStock.map(p => {
                        return `-${p.descripcion}   `
                    }))
                    setOrderError(true)
                }
    
            } catch (error) { console.log(error) }    
        }else{
            setNoData('faltan rellenar campos')
            setTimeout(() => setNoData(''), 3000)
        }
        
    }

    if (checking) {

        return <h1 className='check'>Tu orden se esta generando</h1>
    }

    if (orderOk) {
        console.log('orderOK')
        return (<div className="check">
            <h1>el codigo de tu orden es: {buyCode}</h1>
            <Link to="/" className="backToTheCatalogo">Volver al catalogo</Link>
        </div>
        )
    }

    if (orderError) {
        return (
            <div className="check">
                <h1>Lo siento, se llevaron la ultima camiseta de: <p>{nullStock}</p></h1>
                <Link to="/cart" className="backToTheCatalogo">Volver al carrito</Link>
            </div>
        )
    }




    return (
        <>
            <h1>Finalizar compra</h1>
            <div className='formulario'>
                <form onSubmit={finishBuy}>
                    <label>Nombre: </label>
                    <input type='text' name="campusFirstName" placeholder="Nombre" />
                    <label>Apellido: </label>
                    <input type='text' name="campusLastName" placeholder="Apellido" />
                    <label>Direccion: </label>
                    <input type='text' name="campusAdress" placeholder="Direccion" />
                    <label>Ciudad: </label>
                    <input type='text' name="campusCity" placeholder="Ciudad" />
                    <label>Telefono: </label>
                    <input type='text' name="campusPhone" placeholder="Telefono" />
                    <label>Provincia: </label>
                    <input type='text' name="campusState" placeholder="Provincia" />
                    <label>E-Mail: </label>
                    <input type='email' name="campusEmail" placeholder="E-Mail" />
                    <div>
                        {cart.map(product => <div key={product.id}>
                            {product.quantity} - {product.descripcion}
                        </div>)}
                        <h3>Total: {totalPay} €</h3>
                        <button type='submit'>Generar Orden</button>
                    </div>
                </form>
            </div>
                <p className='noData'>{noData}</p>
        </>
    )
}

export default CheckData
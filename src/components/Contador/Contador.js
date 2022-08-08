import { useState } from 'react'
import './Contador.css'




const ProdCounter = ({ stock = 0, initial = 1, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const increment = () => { counter < stock && setCounter(counter + 1) }

    const decrement = () => { counter > 1 && setCounter(counter - 1) }

    return (
        <div className='contador'>
            <h1>{counter}</h1>
            <div className='botonera'>
            <button onClick={decrement}> -1</button>
            <button onClick={increment}> +1</button>
            <button onClick={() => onAdd(counter)}>Agregar</button>
            </div>
        </div>

    )
}

export default ProdCounter
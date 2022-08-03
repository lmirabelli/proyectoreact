import { useState } from 'react'
import './Contador.css'




const ProdCounter = ({ stock, onAdd}) => {
    const [counter, setCounter] = useState(0)

    const increment = () => { counter < stock && setCounter(counter + 1) }

    const decrement = () => { counter > 1 && setCounter(counter - 1) }

    return (
        <div className='contador'>
            <h1>{counter}</h1>
            <div className='botonera'>
            <button onClick={decrement}> -1</button>
            <button onClick={increment}> +1</button>
            <button onClick={() => onAdd(counter)}>ADD</button>
            </div>
        </div>

    )
}

export default ProdCounter
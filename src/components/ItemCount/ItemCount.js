import { useState } from "react"
import './ItemCount.css'




const ItemCount = ({stock , onAdd}) => {

  const [count, setCount] = useState(0)

  const decrement = () => {
    if (count > 0){
        setCount(prev => prev - 1)
    }
  }

  const increment = () => {
    if (count < stock ) {
        setCount (prev => prev + 1)
    }
  }
    return (
        <div>
            <p>Cantidad: {count}</p>
            <button onClick={(decrement)} className="botonSumar"> - </button>
            <button onClick={(increment)} className="botonSumar">+</button>
            <button onClick={() => onAdd(count)} disabled={count===0} className="agregarAlCarrito">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
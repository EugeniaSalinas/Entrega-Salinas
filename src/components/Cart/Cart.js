import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const {cart, totalCompra, eliminarProducto} = useContext(CartContext)
    const total = totalCompra()

    return(
        <div>
        <h2>Cart</h2>
        {cart.map(prod => {
            return(
                <div key={prod.id}>
                <p>{prod.title}</p>
                <p>{prod.price}</p>
                <p>{prod.quantity}</p>
                <p>{prod.price * prod.quantity}</p>
                <button onClick = {()=> eliminarProducto(prod.id)} >X</button>
                
                </div>
            )
        })}
        <h3>Total: ${total}</h3>
        </div>
    )
}

export default Cart
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const {cart, totalCompra, eliminarProducto} = useContext(CartContext)
    const total = totalCompra()

    return(
        <div>
        <h2>Cart</h2>
        {cart.map(prod => {
            return(
                <div key={prod.id} className="cartContenedor">
                <p className="title">{prod.title}</p>
                <p>$ {prod.price}</p>
                <p>Cantidad: {prod.quantity}</p>
                <p>Subtotal: ${prod.price * prod.quantity}</p>
                <button onClick = {()=> eliminarProducto(prod.id)} className="botonEliminar">Eliminar producto</button>               
                </div>
            )
        })}
        <div>
        <Link to='/checkout' className="botonConfirmar">Confirmar pedido</Link>
        </div>
        <div>
        <h3>Total: ${total}</h3>
        </div>
        </div>
    )
}

export default Cart
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


import './CardWidget.css'

const CardWidget = () => {

  const {cantidadCarrito} = useContext (CartContext)

  const totalCarrito = cantidadCarrito()

    return (
        <Link to='/cart' className='carrito'>
         <img src={'./images/carrito.svg'} alt="carrito"/> 
           {totalCarrito} 
        </Link>
    )
}
export default CardWidget
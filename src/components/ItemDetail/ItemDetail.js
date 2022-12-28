import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
//import { useState } from "react"

const ItemDetail = ({id,title, img, description,category, stock, price}) => {

 const {agregarAlCarrito, estaEnElCarrito} = useContext(CartContext)

 //const [quantityToAdd, setQuantityToAdd] = useState(0)

 const handleOnAdd = (quantity) => {
        
        console.log('se agregó al carrito' + quantity)
        console.log(quantity)
       // setQuantityToAdd(quantity)
        agregarAlCarrito({id,title,price,quantity})
    }





    return(
         <div className="producto-contenedor-detalles">
                <h2>{title}</h2>
                <img src={img} className="imgs" alt="imagen de un cuaderno"/>
                <p>{description}</p>
                <p>{category}</p>
                <p>{price}</p>
                { estaEnElCarrito (id)
                       ?  <Link to='/cart'>Finalizar compra</Link>
                       : stock > 0
                        ? <ItemCount stock ={stock} onAdd = {handleOnAdd}/>                         
                        : <h2>No hay stock</h2>
                }
            </div>
    )
}
export default ItemDetail
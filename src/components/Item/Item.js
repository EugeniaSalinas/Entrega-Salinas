import { Link } from "react-router-dom"
import './Item.css'

const Item = ({product}) => {
    
        return (
            <div className="producto-contenedor">
                <h3>{product.title}</h3>
                <img src={product.img} className="imgs"/>
                <h4>{product.category}</h4>
                <p className="description">{product.description}</p>
                <p>{product.price}</p>
                <Link to= {`/item/${product.id}`} className="botonVerDetalles">Ver detalles</Link>
            </div>
        )
    
}
export default Item
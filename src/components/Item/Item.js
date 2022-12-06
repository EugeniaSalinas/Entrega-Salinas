import { Link } from "react-router-dom"

const Item = ({product}) => {
    
        return (
            <div>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <Link to= {`/item/${product.id}`}>Ver detalles</Link>
            </div>
        )
    
}
export default Item
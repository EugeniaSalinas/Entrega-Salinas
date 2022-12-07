import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response =>{
           setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    },[itemId])


    return (
        <div>
            <h2>Detalles</h2>
            <div className="producto-contenedor-detalles">
                <h2>{product.title}</h2>
                <img src={product.img} className="imgs" alt="imagen de un cuaderno"/>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer
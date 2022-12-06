import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

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
            <div>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <p>{product?.category}</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer
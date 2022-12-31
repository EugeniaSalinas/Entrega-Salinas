import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {itemId} = useParams()

    

    useEffect(() => {
        const productFirebase = doc(db, 'products', itemId)
        getDoc (productFirebase)
            .then (doc =>{
            const data = doc.data()
            const productNew = {id: doc.id, ...data}

            setProduct(productNew)
        }).catch(error => {
            console.log(error)})
      
    },[itemId])

   

   

    return (
        <div>
            <h2>Detalles</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
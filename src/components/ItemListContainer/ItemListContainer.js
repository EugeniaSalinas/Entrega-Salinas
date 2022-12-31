
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

       const collectionFirebase = categoryId ? query (collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')
       getDocs(collectionFirebase)
          .then (response => {
           const productsNew = response.docs.map (doc =>{
           const data = doc.data()
           return { id: doc.id, ...data}
        })

        setProducts(productsNew)
       })
    },[categoryId])
   
   
    return (
    <div>
    <h1>Productos</h1>
    <ItemList products={products}/>
    </div>
   )
} 
export default ItemListContainer
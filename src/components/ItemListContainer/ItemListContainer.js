import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        if(!categoryId){
            getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
        } else {
            getProductsByCategory(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
       
    },[categoryId])
   
   
    return (
    <div>
    <h1>Productos</h1>
    <ItemList products={products}/>
    </div>
   )
} 
export default ItemListContainer
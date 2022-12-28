import { useState, createContext } from 'react';

export const CartContext = createContext({})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (productoParaAgregar) =>{
     if(!estaEnElCarrito(productoParaAgregar.id)){
       setCart([...cart, productoParaAgregar])
     }
    }
 
    const estaEnElCarrito = (id) => {
     return cart.some (product => product.id === id)
    }
    
 
    const cantidadCarrito = () => {
     let acc = 0
 
     cart.forEach(prod => {
       acc += prod.quantity
     })
     return acc
    }
 
    const totalCompra = () => {
     let acc = 0
 
     cart.forEach(prod => {
       acc += prod.quantity * prod.price
     })
     return acc
    }

    const eliminarProducto = (id) =>{
      const carritoFinal = cart.filter (prod => prod.id !== id)
      setCart (carritoFinal)

    }
 


return(
    <CartContext.Provider value={{cart, agregarAlCarrito, estaEnElCarrito, cantidadCarrito, totalCompra, eliminarProducto}}>
    {children}
    </CartContext.Provider>
    
)
}
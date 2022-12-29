import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Cart from "../Cart/Cart"
import {addDoc, collection} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () =>{
    const { cart, totalCompra} = useContext(CartContext)

    const valorInicial = {
       buyer:{
        nombre: '',
        mail:'',
        telefono:''
    },
    items: cart,
    total: totalCompra()
    }

    const [user,setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        setUser({...user, [name]:value})
    }

    const guardarOrden = (e) =>{
        e.preventDefault();
        console.log(user);
        setUser({...valorInicial})

        const orden = collection (db, 'orders')

        addDoc(orden, user)
        .then(response => {
            console.log(response.id)
        })
    }

   

    

    return(
        <div>
            <h3>CHECKOUT</h3>
            <form onSubmit={guardarOrden}>
                <div>
                <input type="text" name='nombre' placeholder='Nombre y Apellido' onChange={capturarInputs} value={user.nombre}/>
                <input type="email" name='mail' placeholder='Correo electrónico'onChange={capturarInputs} value={user.mail}/>
                <input type="number" name='telefono' placeholder='Teléfono'onChange={capturarInputs} value={user.telefono}/>

                <button>Enviar</button>

                </div>
            </form>
        </div>
    
    )
}

export default Checkout
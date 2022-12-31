import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import {addDoc, collection} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import './Checkout.css'
import swal from "sweetalert"



const Checkout = () =>{
    const { cart, totalCompra} = useContext(CartContext)

    const valorInicial = {
       
    items: cart,
    total: totalCompra()
    }

    const [user,setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        
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
            swal("Orden confirmada! El ID del pedido es:", response.id)
        })
       

    }

   

    

    return(
        <div>
            <h3>CHECKOUT</h3>
            <div className="form-contenedor">
            <form onSubmit={guardarOrden} >
                <div >
                <input type="text" name='nombre' placeholder='Nombre y Apellido' onChange={capturarInputs} value={user.nombre} className="inputs"/>
                <input type="email" name='mail' placeholder='Correo electrónico'onChange={capturarInputs} value={user.mail}className="inputs"/>
                <input type="number" name='telefono' placeholder='Teléfono'onChange={capturarInputs} value={user.telefono}className="inputs"/>

                <button className="botonEnviar">Enviar</button>

                </div>
            </form>
            </div>
        </div>
    
    )
}

export default Checkout
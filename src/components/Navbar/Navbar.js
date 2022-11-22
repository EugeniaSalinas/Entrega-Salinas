import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'


const Navbar = () => {
    return(
        <nav className="nav">
            <img src='./images/logo.png'/>
           <button className="boton">Cuadernos</button>
           <button className="boton">Agendas</button>
           <button className="boton">Libretas</button>
           <CardWidget/>
     </nav>

    )
}
export default Navbar
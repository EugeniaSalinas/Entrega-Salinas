import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <nav className="nav">
            <img src='./images/logo.png'/>
           <Link to='/category/cuaderno' className="boton">Cuadernos</Link>
           <Link to='/category/agenda' className="boton">Agendas</Link>
           <Link to='/category/libreta' className="boton">Libretas</Link>
           <CardWidget/>
     </nav>

    )
}
export default Navbar
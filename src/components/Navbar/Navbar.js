import './Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(
        <nav className="nav">
           <Link to='/'> <img src='./images/logo.png' className='logo'/></Link>
           <Link to='/category/Categoría cuaderno' className="boton">Cuadernos</Link>
           <Link to='/category/Categoría agenda' className="boton">Agendas</Link>
           <Link to='/category/Categoría libreta' className="boton">Libretas</Link>
           <CardWidget/>
     </nav>

    )
}
export default Navbar
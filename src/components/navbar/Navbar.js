import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="menu">
        <div className="logo">
            <img src="https://i.ibb.co/LzjQSY1/chuchesportslogo.png" alt="logo" />
        </div>
        <div className="botonera">
        <Link to="/cat/seleccion" className='botonNavbar'>Selecciones</Link>
        <Link to="/cat/primeraArgentina" className='botonNavbar'>Primera A</Link>
        <Link to="/cat/ascenso" className='botonNavbar'>Ascenso</Link>
        <Link to="/cat/premier" className='botonNavbar'>Premier</Link>
        <Link to="/cat/serieA" className='botonNavbar'>Serie A</Link>
        <Link to="/cat/bundesliga" className='botonNavbar'>Bundesliga</Link>
        <Link to="/cat/laliga" className='botonNavbar'>La Liga</Link>
        <Link to="/cat/ligue" className='botonNavbar'>Ligue A</Link>
        <Link to="/cat/otros" className='botonNavbar'>Otros</Link>
        </div>
        <CartWidget />

    </nav>
    )
}

export default Navbar
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <nav className="menu">
        <div className="logo">
            <img src="https://i.ibb.co/LzjQSY1/chuchesportslogo.png" alt="logo" />
        </div>
        <div className="botonera">
        <button>Selecciones</button>
        <button>Primera A</button>
        <button>Ascenso</button>
        <button>Premier</button>
        <button>Serie A</button>
        <button>Bundesliga</button>
        <button>La Liga</button>
        <button>Otros</button>
        </div>
        <CartWidget />

    </nav>
    )
}

export default Navbar
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="menu">
        <div className="logo">
            <img src="https://i.ibb.co/LzjQSY1/chuchesportslogo.png" />
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
    </nav>
    )
}

export default Navbar
import { Link } from "react-router-dom";

function NavBar({esVisible}) {
    return(
    <nav className={`navbar ${esVisible ? "visible" : "invisible"}` }>
        <Link to= "/"> Inicio</Link>
        <Link to= "/category/gpus"> Tarjetas Gráficas</Link>
        <Link to = "/category/cpus"> Procesadores</Link>
        <Link to = "/category/ram">Memorias Ram</Link>
        <Link to = "/category/mother">Placas Madres</Link>
        <Link to = "/category/psus">Fuentes De Alimentacion</Link>
        <Link to = "/category/cases">Gabinetes</Link>
        <Link to = "/category/storages">Almacenamiento</Link>
    </nav>
    );
}
export default NavBar;
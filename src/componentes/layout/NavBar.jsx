import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import BotonLogin from "../common/BotonLogin";

function NavBar({ esVisible, setShowNavBar, setOpened }) {
  const { user: contextUser } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error cargando el usuario del localStorage:", error);
        setUser(contextUser);
      }
    } else {
      setUser(contextUser);
    }
  }, [contextUser]);

  function handleClick() {
    setShowNavBar(false);
    setOpened(false);
  }

  return (
    <nav className={`navbar ${esVisible ? "visible" : "invisible"}`}>
      <h2 style={{ color: "white" }}>
        Bienvenido {user ? `${user.nombre}` : ""}
      </h2>
      <Link to="/" onClick={handleClick}>Inicio</Link>
      <Link to="/category/gpus" onClick={handleClick}>Tarjetas Gráficas</Link>
      <Link to="/category/cpus" onClick={handleClick}>Procesadores</Link>
      <Link to="/category/ram" onClick={handleClick}>Memorias Ram</Link>
      <Link to="/category/mother" onClick={handleClick}>Placas Madres</Link>
      <Link to="/category/psus" onClick={handleClick}>Fuentes De Alimentación</Link>
      <Link to="/category/cases" onClick={handleClick}>Gabinetes</Link>
      <Link to="/category/storages" onClick={handleClick}>Almacenamiento</Link>
      <BotonLogin setShowNavBar={setShowNavBar} setOpened={setOpened}/>
    </nav>
  );
}

export default NavBar;

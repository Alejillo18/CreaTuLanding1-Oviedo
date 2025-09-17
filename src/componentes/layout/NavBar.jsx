import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import BotonLogin from "../common/BotonLogin";

function NavBar({ esVisible, setShowNavBar, setOpened }) {
  const { user } = useContext(UserContext);

  function handleClick() {
    setShowNavBar(false);
    setOpened(false);
  }

  useEffect(() => {
    if (!user) {
      toast("🔒 Debes iniciar sesión para poder comprar productos", {
        icon: "⚠️",
        duration: 4000,
        style: {
          background: "#fff",
          color: "#1e293b",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
        },
      });
    }
  }, []);

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

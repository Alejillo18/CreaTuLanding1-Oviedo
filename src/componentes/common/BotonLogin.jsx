import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


function BotonLogin({setOpened, setShowNavBar}) {
  const { user } = useContext(UserContext);

    const handleClick = () =>{
        setShowNavBar(false)
        setOpened(false)
    }

  return (
    <div className="login-button">
      {user ? (
        <Link to="/login" className="btn-login" onClick={handleClick}>
       {user.nombre} {user.apellido} 👤
      </Link>
      ) : (
        <Link to="/login" className="btn-login" onClick={handleClick}>
          Iniciar Sesión
        </Link>
      )}
    </div>
  );
}

export default BotonLogin;

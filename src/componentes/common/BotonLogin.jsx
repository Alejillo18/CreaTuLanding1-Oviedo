import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function BotonLogin({ setOpened, setShowNavBar }) {
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

  const handleClick = () => {
    setShowNavBar(false);
    setOpened(false);
  };

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

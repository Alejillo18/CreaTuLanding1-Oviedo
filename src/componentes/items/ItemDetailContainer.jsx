import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../../data/products";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    
    getProductById(id)
      .then((res) => {
        setProducto(res);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al cargar el producto. Intenta nuevamente.");
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <div className="loading">Cargando producto...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!producto) return <div className="not-found">Producto no encontrado</div>;

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
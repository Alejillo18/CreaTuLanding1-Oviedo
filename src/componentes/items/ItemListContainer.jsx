import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../../data/products";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    setError(null);

    const fetchProductos = id ? getProductsByCategory(id) : getProducts();
    
    fetchProductos
      .then((res) => {
        setProductos(res);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Error al obtener los productos. Intente nuevamente");
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <div className="loading">Cargando productos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="ItemListContainer">
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
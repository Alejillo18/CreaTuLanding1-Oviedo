import ItemCount from "../common/ItemCount";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  return (
    <div className="item-detail">
      <Link to="/" className="back-link">← Volver al listado</Link>
      
      <div className="item-detail-content">
        <div className="item-image">
          <img src={producto.imagen} alt={producto.titulo} />
        </div>
        
        <div className="item-info">
          <h2>{producto.titulo}</h2>
          <p className="description">{producto.descripcion}</p>
          <h3 className="price">${producto.precio.toLocaleString()}</h3>
          
          <div className="specs">
            <h4>Especificaciones:</h4>
            <ul>
              {producto.especificaciones && Object.entries(producto.especificaciones).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="stock-info">
            <p>Stock disponible: {producto.stock} unidades</p>
          </div>
          <ItemCount initial={1} stock={producto.stock} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
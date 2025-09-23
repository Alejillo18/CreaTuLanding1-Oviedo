import Title from "../common/Title";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="ItemListContainer">
      <Title>Productos de la tienda {productos.length > 0 ? `(${productos.length})` : ''}</Title>
      <table className="table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </tbody>
      </table>
      {productos.length === 0 && <p>No hay productos en esta categoría</p>}
    </div>
  );
};

export default ItemList;
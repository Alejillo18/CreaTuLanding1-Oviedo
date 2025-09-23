import Title from "../common/Title";
import { Link } from "react-router-dom";

function Item({ id, titulo, descripcion, precio, imagen }) {
  return (
    <tr>
      <td>
        <img src={imagen} alt={titulo} style={{ width: "80px", height: "auto" }} />
      </td>
      <td>
        <Link to={`/item/${id}`}>
          <Title>{titulo}</Title>
        </Link>
      </td>
      <td>{descripcion}</td>
      <td>${precio.toLocaleString()}</td>
    </tr>
  );
}

export default Item;
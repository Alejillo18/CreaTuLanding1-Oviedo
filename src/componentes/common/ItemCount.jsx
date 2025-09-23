import { useState } from "react";

function ItemCount({ initial = 1, stock = 10, agregarCarrito }) {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function handleClick(quantity){
    agregarCarrito(quantity)
  }

  return (
    <div className="item-count">
      <div className="quantity-controls">
        <button onClick={decrement} disabled={quantity <= 1}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>
          +
        </button>
      </div>
      
      <button className="add-to-cart-btn" onClick={() => {handleClick(quantity)}}>
        Agregar al carrito
      </button>
      
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  );
}

export default ItemCount;
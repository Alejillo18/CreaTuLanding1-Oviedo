import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart">
      <button>
        <div className="cart-widget">
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </div>
      </button>
    </Link>
  );
}

export default CartWidget;

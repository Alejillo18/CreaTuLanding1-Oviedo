import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../../data/firebase";
import toast from "react-hot-toast";

export function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.producto.precio * item.quantity,
    0
  );

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast("🔒 Debes iniciar sesión para poder comprar productos", {
        id: "login-toast",
        icon: "⚠️",
        duration: 4000,
        position: "bottom-right",
        style: {
          background: "#2563eb",
          color: "#fff",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
    }
  }, []);

  function handleClear() {
    clearCart();
    toast("🗑️ Carrito vaciado", { icon: "🧹" });
  }

  async function handleCompra() {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("Debes ingresar tus datos antes de comprar");
      return;
    }

    const user = JSON.parse(storedUser);

    if (cart.length === 0) {
      toast.error("El carrito está vacío");
      return;
    }

    try {
      const db = getFirestore(app);
      const ordersCollection = collection(db, "orders");

      const order = {
        comprador: { ...user },
        items: cart.map((item) => ({
          id: item.producto.id,
          titulo: item.producto.titulo,
          precio: item.producto.precio,
          cantidad: item.quantity,
        })),
        total,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(ordersCollection, order);

      toast.success(
        `Compra realizada con éxito ✅ su orden tiene el id: ${docRef.id}`
      );

      clearCart();
    } catch (err) {
      console.error("Error al finalizar compra:", err);
      toast.error("❌ Hubo un problema al procesar la compra");
    }
  }

  return (
    <>
      <Link to="/" className="back-link">← Volver al listado</Link>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.producto.imagen} alt={item.producto.titulo} width="80" />
              <div className="cart-info">
                <h3>{item.producto.titulo}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.producto.precio.toLocaleString()}</p>
                <p>Subtotal: ${(item.producto.precio * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${total.toLocaleString()}</h3>
          <button onClick={handleCompra} className="btn-finalizar">Finalizar Compra</button>
          <button onClick={handleClear} className={"btn-vaciar"}>
            Limpiar carrito
          </button>
        </div>
      )}
    </>
  );
}

# Proyecto Final - E-commerce React

Este proyecto es un **e-commerce** desarrollado como entrega final del curso de Desarrollo Web en **Coderhouse**.  
La aplicación está construida con **React** y utiliza **Firebase/Firestore** para la gestión de productos y órdenes de compra.  

---

##  Funcionalidad

- **Catálogo de productos**: listado dinámico obtenido desde Firestore.  
- **Detalle de producto**: vista individual con información ampliada.  
- **Carrito de compras**:
  - Agregar y limpiar productos.
  - Calcular subtotales y total.  
  - Mostrar cantidad de productos en el ícono del carrito.  
- **Checkout**: formulario para finalizar la compra, que genera una orden en Firestore y devuelve un ID de confirmación al usuario.  

---

##  Tecnologías utilizadas

- **React** (SPA con React Router y hooks).  
- **Firebase / Firestore** (base de datos de productos y órdenes).  
- **Context API** (manejo de estado global del carrito).  
- **CSS / librerías de estilos** para la presentación.  

---

## Estructura principal de componentes

- `NavBar` + `CartWidget`  
- `ItemListContainer` → `ItemList` → `Item`  
- `ItemDetailContainer` → `ItemDetail` → `ItemCount`  
- `Cart` → `CartItem`  
- `FormLogin`  

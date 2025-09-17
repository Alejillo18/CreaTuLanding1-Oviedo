import  { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import NavBar from "./layout/NavBar";
import Button from "./common/Button";
import CartWidget from "./common/CartWidget";
import ItemListContainer from "./items/ItemListContainer";
import ItemDetailContainer from "./items/ItemDetailContainer";
import FormLogin from "./layout/FormLogin"
import { Cart } from "./layout/Cart";
import { CartProvider } from '../context/CartContext';
import { UserProvider } from '../context/UserContext';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-visible", showNavBar);
  }, [showNavBar]);

  return (
    <HashRouter>
      <UserProvider>
      <CartProvider>
        <Toaster/>
      <div className="app-container">
        <Button
          opened={opened}
          setOpened={setOpened}
          setShowNavBar={setShowNavBar}
          showNavBar={showNavBar}
        />
        <NavBar esVisible={showNavBar} setShowNavBar={setShowNavBar} setOpened={setOpened}/>
        <CartWidget />
        
        <Layout showNavBar={showNavBar}>
          <Routes>
            <Route path="/login" element={<FormLogin/>}/>
            <Route path = "/" element = {<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
            <Route path = "/cart" element = {<Cart/>}/>
          </Routes>
        </Layout>
      </div>
      </CartProvider>
      </UserProvider>
    </HashRouter>
  );
}

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NavBar from "./layout/NavBar";
import Button from "./common/Button";
import CartWidget from "./common/CartWidget";
import ItemListContainer from "./items/ItemListContainer";
import ItemDetailContainer from "./items/ItemDetailContainer";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-visible", showNavBar);
  }, [showNavBar]);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Button
          opened={opened}
          setOpened={setOpened}
          setShowNavBar={setShowNavBar}
          showNavBar={showNavBar}
        />
        <NavBar esVisible={showNavBar} />
        <CartWidget />
        
        <Layout showNavBar={showNavBar}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import Navbar from "./components/Navbar";
// import Hero from "./pages/shop/Hero";
// import HeadlineCards from "./pages/shop/HeadlineCards";
// import Food from "./pages/shop/Food";
// import Category from "./pages/shop/Category";
import Cart from "./pages/cart/Cart";
import Home from "./pages/shop/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context.jsx";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;

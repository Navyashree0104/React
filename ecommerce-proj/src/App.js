import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Product";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import "./styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/products" 
          element={isAuthenticated ? <Products cart={cart} setCart={setCart} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/cart" 
          element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/payment" 
          element={isAuthenticated ? <Payment cart={cart} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
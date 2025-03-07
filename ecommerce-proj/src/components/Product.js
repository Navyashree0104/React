import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "₹80,000", image: "laptop.jpg" },
  { id: 2, name: "Smartphone", price: "₹16,000", image: "phone.jpg" },
  { id: 3, name: "Smartwatch", price: "₹5,000", image: "smartwatch.jpg" },
  { id: 4, name: "Speaker", price: "₹3,000", image: "speaker.jpg" },
  { id: 5, name: "Headphone", price: "₹2,500", image: "headphone.jpg" },
  { id: 6, name: "Tablet", price: "₹25,000", image: "tablet.jpg" },
];

const Products = ({ setIsAuthenticated, cart, setCart }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCart([]);  // Clears the cart when logging out
        navigate("/");
    };
    

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🛍️ Product Catalogue</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyContent: "center" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px", background: "#fff", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button 
                            onClick={() => addToCart(product)} 
                            style={{ padding: "8px 15px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/cart")} style={{ padding: "10px 20px", marginTop: "20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                🛒 Go to Cart
            </button>
            <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Logout
            </button>
        </div>
    );
};

export default Products;  

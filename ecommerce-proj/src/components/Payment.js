import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ cart }) => {
    const navigate = useNavigate();

    const totalAmount = cart.reduce((total, item) => {
        return total + parseInt(item.price.replace(/₹|,/g, ""), 10);
    }, 0);

    const handleOrderSuccess = () => {
        alert("🎉 Order placed successfully!");
        navigate("/products");  // Redirects back to the products page after ordering
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>💳 Payment Page</h2>
            <p>Total Amount: ₹{totalAmount.toLocaleString()}</p>
            <button onClick={handleOrderSuccess} style={{ padding: "10px 20px", marginTop: "20px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                ✅ Order Successfully
            </button>
            <button onClick={() => navigate("/products")} style={{ padding: "10px 20px", marginTop: "20px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" }}>
                🔙 Back to Products
            </button>
        </div>
    );
};

export default Payment;

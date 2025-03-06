import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🛒 Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
                            <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <button onClick={() => removeFromCart(index)} style={{ background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px" }}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={() => navigate("/payment")} style={{ padding: "10px 20px", marginTop: "20px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Proceed to Payment
            </button>
        </div>
    );
};

export default Cart;

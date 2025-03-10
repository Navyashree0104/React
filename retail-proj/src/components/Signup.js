import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

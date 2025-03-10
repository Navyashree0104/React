import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "red" }}>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="button">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

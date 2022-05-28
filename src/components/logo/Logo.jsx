import React from "react";
import { Link } from "react-router-dom";
import './Logo.css'

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="/image/Logo.jpg" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;

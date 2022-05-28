import React from "react";
import { Link } from "react-router-dom";
import './../TopBar.css'

const NavLinks = () => {
  return (
    <div className="navLinks">
      <ul className="navLinksList">
        <li className="navLinksItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navLinksItem">
          <Link to="/shop/allProducts">Shop</Link>
        </li>
        <li className="navLinksItem">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;

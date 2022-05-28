import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CartDrawer from "./CartDrawer";
import SignUpDrawer from './SignUpDrawer';
import "./Features.css";

const Features = () => {

  return (
    <div className="featurs d-none d-lg-block">
      <div className="featuresWrapper">
        <ul className="featuresList">
          <li className="featuresListItem">
            <CartDrawer/>
          </li>
          <li className="featuresListItem">
            <button className="favoritesButton">
              <Link to="/favorites">
                <FavoriteBorderIcon />
              </Link>
            </button>
          </li>
          <li className="featuresListItem">
            <button className="signUpButton">
              <SignUpDrawer/>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

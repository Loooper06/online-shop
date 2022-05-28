import React, { useState, useEffect } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import MainProductCard from "./../../components/mainProductCard/MainProductCard";
import "./MainProduct.css";

const MainProduct = () => {
  const [mainProduct, setMainProduct] = useState(null);
  // Params
  let params = useParams();

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/allProducts.json")
      .then((response) => response.json())
      .then((data) => {
        let allProducts = Object.entries(data);
        let mainProductObject = allProducts.find(
          (product) => product[1].id == params.productID
        );
        setMainProduct(mainProductObject);
      });
  }, []);

  return (
    <>
      {mainProduct && (
        <div className="mainProduct">
          <div className="mainProductHeader">
            <h2>Azeno - Sport Store</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" className="fw-light text-black">
                Home
              </Link>
              <Link to="/shop" className="fw-light text-black">
                Core
              </Link>
              <Typography color="text.primary" className="fw-light text-muted">
                {mainProduct[1].title}
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="mainProductWrapper">
            <MainProductCard {...mainProduct[1]} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainProduct;

import React, { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ShopProductCard from "../../../components/shopProductCard/ShopProductCard";

const KidsCategory = () => {
  const [kidMain, setKidMain] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/kid/main.json")
      .then((response) => response.json())
      .then((data) => setKidMain(Object.entries(data)));
  }, []);

  let history = useLocation();

  return (
    <>
      {history.pathname === "/shop/kid" ? (
        kidMain.length ? (
          <div className="d-flex justify-content-start align-items-center flex-wrap">
            {kidMain.map((product) => (
              <ShopProductCard {...product[1]} key={product[1].id} />
            ))}
          </div>
        ) : (
          <div className="EmptyProduct">
            <h1>No products available yet</h1>
            <p>
              Stay tuned! More products will be shown here as they are added.
            </p>
          </div>
        )
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default KidsCategory;

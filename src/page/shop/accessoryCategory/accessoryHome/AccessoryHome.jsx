import React, { useState, useEffect } from "react";
import ShopProductCard from "./../../../../components/shopProductCard/ShopProductCard";

const AccessoryHome = () => {
  const [accessoryHome, setAccessoryHome] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/accessories/home.json")
      .then((response) => response.json())
      .then((data) => setAccessoryHome(Object.entries(data)));
  }, []);

  return (
    <>
      {accessoryHome.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {accessoryHome.map((product) => (
            <ShopProductCard {...product[1]} key={product[1].id} />
          ))}
        </div>
      ) : (
        <div className="EmptyProduct">
          <h1>No products available yet</h1>
          <p>Stay tuned! More products will be shown here as they are added.</p>
        </div>
      )}
    </>
  );
};

export default AccessoryHome;
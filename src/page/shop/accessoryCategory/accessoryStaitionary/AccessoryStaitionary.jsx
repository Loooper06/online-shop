import React, { useState, useEffect } from "react";
import ShopProductCard from "./../../../../components/shopProductCard/ShopProductCard";

const AccessoryStaitionary = () => {
  const [accessoryStaitionary, setAccessoryStaitionary] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/accessories/staitionary.json")
      .then((response) => response.json())
      .then((data) => setAccessoryStaitionary(Object.entries(data)));
  }, []);

  return (
    <>
      {accessoryStaitionary.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {accessoryStaitionary.map((product) => (
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

export default AccessoryStaitionary;
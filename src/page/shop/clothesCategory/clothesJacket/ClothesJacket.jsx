import React, { useState, useEffect } from "react";
import ShopProductCard from "./../../../../components/shopProductCard/ShopProductCard";

const ClothesJacket = () => {
  const [clothesJacket, setClothesJacket] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/clothes/jacket.json")
      .then((response) => response.json())
      .then((data) => setClothesJacket(Object.entries(data)));
  }, []);
  return (
    <>
      {clothesJacket.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {clothesJacket.map((product) => (
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

export default ClothesJacket;
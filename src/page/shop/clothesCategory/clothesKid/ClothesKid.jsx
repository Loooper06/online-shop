import React, { useState, useEffect } from "react";
import ShopProductCard from "./../../../../components/shopProductCard/ShopProductCard";

const ClothesKid = () => {
  const [clothesKid, setClothesKid] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/clothes/kid.json")
      .then((response) => response.json())
      .then((data) => setClothesKid(Object.entries(data)));
  }, []);
  return (
    <>
      {clothesKid.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {clothesKid.map((product) => (
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

export default ClothesKid;
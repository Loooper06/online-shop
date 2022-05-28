import React, { useState, useEffect } from "react";
import ShopProductCard from "./../../../../components/shopProductCard/ShopProductCard";

const AccessoryBabyShoes = () => {
  const [accessoryBabyShoes, setAccessoryBabyShoes] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/accessories/babyShoes.json")
      .then((response) => response.json())
      .then((data) => setAccessoryBabyShoes(Object.entries(data)));
  }, []);

  return (
    <>
      {accessoryBabyShoes.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {accessoryBabyShoes.map((product) => (
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

export default AccessoryBabyShoes;
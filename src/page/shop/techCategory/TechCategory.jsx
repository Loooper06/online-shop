import React, { useState, useEffect } from "react";
import ShopProductCard from "../../../components/shopProductCard/ShopProductCard";

const TechCategory = () => {
  const [techMain, setTechMain] = useState([]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/tech/main.json")
      .then((response) => response.json())
      .then((data) => setTechMain(Object.entries(data)));
  }, []);

  return (
    <>
      {techMain.length ? (
        <div className="d-flex justify-content-start align-items-center flex-wrap">
          {techMain.map((product) => (
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

export default TechCategory;

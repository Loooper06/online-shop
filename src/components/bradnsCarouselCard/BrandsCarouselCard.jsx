import React from "react";
import "./BrandsCarouselCard.css";

const BrandsCarouselCard = (props) => {
  return (
    <div className="brandsCard">
      <img src={props.img} alt="Brand" />
    </div>
  );
};

export default BrandsCarouselCard;

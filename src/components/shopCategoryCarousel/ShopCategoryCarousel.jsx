import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ShopCategory.css";

const ShopCategory = () => {
  let shopCategoryItems = [
    {
      id: 1,
      title: "Clothes",
      img: "/image/categoryClothes.jpg",
      path: "clothes",
    },
    {
      id: 2,
      title: "Accessory",
      img: "/image/categoryAccessory.jpg",
      path: "accessory",
    },
    { id: 3, title: "Kids", img: "/image/categoryKids.jpg", path: "kid" },
    {
      id: 4,
      title: "Footwear",
      img: "/image/categoryFootwear.jpg",
      path: "footwear",
    },
    {
      id: 5,
      title: "Fitness",
      img: "/image/categoryFitnees.jpg",
      path: "fitness",
    },
    { id: 6, title: "Tech", img: "/image/categoryTech.jpg", path: "tech" },
  ];

  let options = {
    items: 5,
    mergeFit: true,
    loop: true,
    margin: 10,
    responsive: {
      992: { items: 5 },
      763: { items: 4 },
      568: { items: 3 },
      395: { items: 2 },
      0: { items: 1 },
    },
  };

  return (
    <div className="mt-4 shopCategoryCarousel">
      <OwlCarousel {...options}>
        {shopCategoryItems.map((item) => (
          <Link to={item.path} key={item.id}>
            <div className="categoryItem">
              <div className="categoryItemImg">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="categoryItemTitle">
                <h6>{item.title}</h6>
              </div>
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ShopCategory;

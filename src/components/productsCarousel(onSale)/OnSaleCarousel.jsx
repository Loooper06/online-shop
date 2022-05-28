import React, { useState, useEffect } from "react";
import ProductsCard from "../carouselProductsCard/ProductsCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./../productsCarousel(trendings)/ProductsCarousel.css";

const ProductsCarousel = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [onSale, setOnSaleProducts] = useState([]);
  const [mounted, setMounted] = useState(false);
  const setComponentUpdate = () => {
    setMounted((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/onSale.json")
      .then((response) => response.json())
      .then((data) => setOnSaleProducts(Object.entries(data)));
  }, [mounted]);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/cart.json")
      .then((response) => response.json())
      .then((data) => {
        setCartProducts(Object.entries(data));
      });
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  });


  const options = [
    {
      items: 5,
      margin: 15,
      loop: true,
      nav: true,
      stagePadding: 20,
      slideBy: 5,
      navText: ["<div>&#x2190;</div>", "<div>&#x2192</div>"],
      navClass: ["OwlPrev", "OwlNext"],
      responsive: {
        1400: { items: 5 },
        1200: { items: 4 },
        992: { items: 3 },
        481: { items: 2 },
        0: { items: 1 },
      },
    },
  ];

  return (
    <div className="ProductsCarousel">
      <div className="CarouselWrapper">
        <div
          className="ProductsCarouselTitle"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="200"
        >
          <h1>{props.title}</h1>
        </div>
        {onSale && (
          <OwlCarousel
            className="trendingCarousel"
            {...options[0]}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-ofsset="200"
          >
            {onSale.map((product) => (
              <ProductsCard
                {...product[1]}
                key={product[1].id}
                onCart={cartProducts}
                onUpdate={() => setComponentUpdate()}
              />
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default ProductsCarousel;

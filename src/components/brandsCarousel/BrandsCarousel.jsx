import React, { useState } from "react";
import BrandsCarouselCard from "./../bradnsCarouselCard/BrandsCarouselCard";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BrandsCarousel.css";

const BrandsCarousel = () => {
  const [brands, setBrands] = useState([
    { id: 1, brand: "CampFire", img: "/image/brand_1.jpg" },
    { id: 2, brand: "BeatSound", img: "/image/brand_2.jpg" },
    { id: 3, brand: "RedBox", img: "/image/brand_3.jpg" },
    { id: 4, brand: "MoneyMagazine", img: "/image/brand_4.jpg" },
    { id: 5, brand: "Minimal", img: "/image/brand_5.jpg" },
    { id: 6, brand: "Blast", img: "/image/brand_6.jpg" },
  ]);

  let options = {
    items: 5,
    nav: false,
    dots: false,
    stagePadding: 20,
    margin: 30,
    merge: true,
    mergeFit: true,
    responsive: {
      1200: { items: 5 },
      992: { items: 4 },
      768: { items: 3 },
      576: { items: 2 },
      0: { items: 1, dots: true },
    },
  };

  return (
    <Container className="brandsCarousel"
    data-aos='fade-up'
    data-aos-duration='2200'
    data-aos-offset='800'
    >
      <Row>
        <Col xs={12}>
          <OwlCarousel {...options} className="owl-theme">
            {brands.map((brand) => (
              <Link to="/shop/allProducts" key={brand.id}>
                <BrandsCarouselCard {...brand} />
              </Link>
            ))}
          </OwlCarousel>
        </Col>
      </Row>
    </Container>
  );
};

export default BrandsCarousel;

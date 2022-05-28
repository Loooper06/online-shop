import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SmBanner from "./SmBanner";
import "./SubBanner.css";

const SubBanner = () => {
  const [smBanner, setSmBanner] = useState([
    { id: 1, article: "New ARRIVALS", img: "/image/azeno_newArrivals.jpg" },
    {
      id: 2,
      article: "30% OFF ALL ITEMS",
      img: "/image/azeno_30precentOff.jpg",
    },
    {
      id: 3,
      article: "MID SEASON SALE",
      img: "/image/azeno_MidSeasonSale.jpg",
    },
  ]);

  return (
    <Container className="my-4" fluid>
      <Row>
        {smBanner.map((item) => (
          <Col xs={12} md={12} lg={4} key={item.id}>
            <Link to="/shop/allProducts">
              <SmBanner img={item.img} article={item.article} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubBanner;

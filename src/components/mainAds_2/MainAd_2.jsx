import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./MainAd_2.css";

const MainAd_2 = () => {
  return (
    <Container className=" mainAd_2" fluid 
    data-aos='fade-up'
    data-aos-duration ='1200'
    data-aos-offset ='300'
    >
      <Row>
        <Col xs={12} md={12} lg={4} className="p-0">
          <div className="mainAdContext">
            <div className="Ad_text">
              <h1>DEALS <br /> OFF THE DAY</h1>
            </div>
            <div className="mainAdProductTitle">
              <article>WATER REPELLENT JACKET</article>
            </div>
            <div className="mainAdProductPrices">
              <p className="mainPrice">$ 35.90</p>
              <p className="discountedPrice">$ 28.72</p>
            </div>
            <div className="mainAdExpireTime">
              <article>EXPIRED TIME</article>
            </div>
            <div className="mainAdShopLink">
              <Link to="/shop/allProducts">MORE DETAIL &#x2192;</Link>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} lg={8} className="p-0">
          <div className="mainAdImgContainer">
            <Link to='/shop/allProducts'><img src="./image/mainAd-2.jpg" alt="Ad-Product" /></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainAd_2;

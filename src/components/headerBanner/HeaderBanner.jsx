import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./HeaderBanner.css";

const HeaderBanner = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={6} className="mt-3 mt-lg-0 p-0 m-0">
            <div className="bannerWrapper">
              <img src="./image/azeno_img_1-1.jpg" alt="banner" />
              <div className="bannerCaption">
                <h1>MEN'S</h1>
                <Link to="/shop/allProducts">Shop Now <ArrowRightAltIcon/></Link>
              </div>
            </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="mt-3 mt-lg-0 p-0 m-0">
            <div className="bannerWrapper">
              <img src="./image/azeno_img_1-2.jpg" alt="banner" />
              <div className="bannerCaption">
                <h1>WOMEN'S</h1>
                <Link to="/shop/allProducts">Shop Now <ArrowRightAltIcon/></Link>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderBanner;

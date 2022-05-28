import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./MainAd_1.css";

const MainAd_1 = () => {
  return (
    <Container
      fluid
      className="mainAd_1Wrapper"
      data-aos="fade-up"
      data-aos-duration="1000"
      date-aos-offset='300'
      data-aos-delay='700'
    >
      <Row>
        <Col xs={12} md={12} lg={6} className="ps-lg-0">
          <div className="mainAdLeftSide">
            <img
              src="./Image/mainAd_1.jpg"
              alt="Advertisment"
              className="mainAdLeftSideImg"
            />
            <div className="toolTip_1">
              <Link to="/shop/allProducts">
                <div className="tooltipIcon">
                  <span>+</span>
                </div>
              </Link>
              <div className="tooltipContainer">
                <Link to="/shop/allProducts">
                  <img src="./Image/downFillWindRunner.jpg" alt="product" />
                  <h6>Down Fill Wind Runner</h6>
                  <h6>$ 28.97</h6>
                </Link>
              </div>
            </div>
            <div className="toolTip_2">
              <Link to="/shop/allProducts">
                <div className="tooltipIcon_2">
                  <span>+</span>
                </div>
              </Link>
              <div className="tooltipContainer_2">
                <Link to="/shop/allProducts">
                  <img src="./Image/joggers.jpg" alt="product" />
                  <h6>Joggers Tech Fleece</h6>
                  <h6>$ 34.20</h6>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="pe-lg-0">
          <div className="mainAdRightSide">
            <div className="mainAdRightSideContext">
              <h4>NEW FROM AZENO RUNNING</h4>
              <h1>Find Your Fast</h1>
              <Link to="/shop/allProducts">Shop Collection &#x2192;</Link>
            </div>
            <div className="mainAdRightSideImg">
              <img src="./Image/mainAd_2.jpg" alt="product" />
              <a href="/#" className="videoPlayIcon">
                <div className="mainAdRightSideOverlay">
                  <PlayArrowIcon />
                </div>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainAd_1;

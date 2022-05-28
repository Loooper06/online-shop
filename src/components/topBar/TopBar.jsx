import React from "react";
import Logo from "./../logo/Logo";
import NavLinks from "./navLinks/NavLinks";
import Features from "./features/Features";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { Container, Row, Col } from "react-bootstrap";
import "./TopBar.css";

const TopBar = () => {
  return (
    <Container fluid className="px-3 py-4 topbar">
      <Row>
        <Col xs={1} lg={1}>
          <Logo />
        </Col>
        <Col xs={0} lg={8} className="d-lg-block d-none">
          <NavLinks />
        </Col>
        <Col xs={11} lg={3}>
          <Features />
          <BurgerMenu />
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;

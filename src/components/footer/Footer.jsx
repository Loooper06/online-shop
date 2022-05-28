import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterItems from "./../footerItems/FooterItems";
import "./Footer.css";

const Footer = () => {
  const [getHelp, setGetHelp] = useState([
    {
      id: 1001,
      title: "GET HELP",
      subItems: [
        { id: 2001, subTitle: "Delivery", subPath: "/" },
        { id: 2002, subTitle: "Legal Notice", subPath: "/" },
        { id: 2003, subTitle: "Terms & Conditions", subPath: "/" },
        { id: 2004, subTitle: "About Us", subPath: "/aboutus" },
        { id: 2005, subTitle: "Secure Payments", subPath: "/" },
      ],
    },
  ]);
  const [services, setServices] = useState([
    {
      id: 1002,
      title: "SERVICES",
      subItems: [
        { id: 2006, subTitle: "Suppliers", subPath: "/" },
        { id: 2007, subTitle: "Stores", subPath: "/" },
        { id: 2008, subTitle: "Identity", subPath: "/" },
        { id: 2009, subTitle: "SiteMap", subPath: "/" },
        { id: 2010, subTitle: "Contact Us", subPath: "/contactus" },
      ],
    },
  ]);
  const [myAccount, setMyAccount] = useState([
    {
      id: 1003,
      title: "MY ACCOUNT",
      subItems: [
        { id: 2011, subTitle: "My Account", subPath: "/" },
        { id: 2012, subTitle: "Order History", subPath: "/" },
        { id: 2013, subTitle: "Addresses", subPath: "/" },
        { id: 2014, subTitle: "Identity", subPath: "/" },
        { id: 2015, subTitle: "Login", subPath: "/login" },
      ],
    },
  ]);

  return (
    <Container fluid className="footer px-5">
      <Row>
        <Col xs={6} sm={6} lg={3} className="mt-lg-0 mt-4">
          {getHelp.map((item) => (
            <FooterItems {...item} key={item.id} />
          ))}
        </Col>
        <Col xs={6} sm={6} lg={3} className="mt-lg-0 mt-4">
          {services.map((item) => (
            <FooterItems {...item} key={item.id} />
          ))}
        </Col>
        <Col xs={6} sm={6} lg={3} className="mt-lg-0 mt-4">
          {myAccount.map((item) => (
            <FooterItems {...item} key={item.id} />
          ))}
        </Col>
        <Col xs={12} sm={6} lg={3} className="mt-lg-0 mt-4 px-xl-4 px-0">
          <article className="footerItemTitle">NEWS LETTER</article>
          <p className="footerItemNewsLetterContext">
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </p>
            <div className="footerItemsNewsLetterSubscribe">
                <input type="email" placeholder="Your Email Address" className="newsLetterSubscribeTextArea" />
                <button className="newsLetterSubscribeSubmitButton">Subscribe</button>
            </div>

        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

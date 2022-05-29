import React, { useState, useEffect } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainCartProduct from './../../components/mainCartProduct/MainCartProduct';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "./Cart.css";

const Cart = () => {
  //States
  const [cartProducts, setCartProducts] = useState([]);
  const [mounted, setMounted] = useState(false);

  //Effects
  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/cart.json")
      .then((response) => response.json())
      .then((data) => setCartProducts(Object.entries(data)));
  }, [mounted]);

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  return (
    <div className="cart">
      <div className="cartHeader">
        <h2>Azeno - Sport Store</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="text-black fw-light">
            Home
          </Link>
          <Link to="/shop" className="text-black fw-light">
            Shop
          </Link>
          <Typography className="text-muted fw-light">Cart</Typography>
        </Breadcrumbs>
      </div>
      <Container fluid className="cartContentWrapper px-5">
        <Row>
          <Col xs={12} sm={12} md={8} className='p-4'>
                <div className="cartItemsBox border">
                    <div className="cartItemsBoxHeader p-2">
                        <h5>Shopping Cart</h5>
                    </div>
                    <div className="cartItems">
                        {cartProducts && (
                            cartProducts.map(product => (
                                <MainCartProduct detail={product} key={product[1].id} />
                            ))
                        )}
                    </div>
                </div>
                <Link to='/shop/allProducts'><ArrowBackIosNewOutlinedIcon/>Continue Shopping</Link>
          </Col>
          <Col xs={12} sm={12} md={4} className='p-4'>
            <div className="cartTotals">
              <h5>Cart Totals</h5>
              <section className="cartTotalsItems">
                <article>
                  <p>{cartProducts.length} items</p>
                  <p>171 $</p>
                </article>
                <article>
                  <p>Shiping</p>
                  <p>7 $</p>
                </article>
              </section>
              <div className="addDiscountCoupon">
                <input type="text" placeholder="Have Promo Code ! ..." />
                <button className="submitPromoCodeButton">Add</button>
              </div>
              <section className="cartTotalsItems">
                <article>
                  <p>Total (tax excl.)</p>
                  <p>181 $</p>
                </article>
                <article>
                  <p>Total (tax incl.)</p>
                  <p>181 $</p>
                </article>
                <article>
                  <p>Taxes</p>
                  <p>0 $</p>
                </article>
              </section>
            </div>
            <div className="checkOutBox">
              <Link to="/checkout">
                <button className="checkOutButton">Proceed Check Out</button>
              </Link>
            </div>
            <div className="mainProductSubDetail">
                <div className="mainProductSubDetailItem">
                  <div className="subDetailItemImg">
                    <img
                      src="/image/securityProductDetail.jpg"
                      alt="Security"
                    />
                  </div>
                  <div className="subDetailItemContext">
                    <article>Security policy</article>
                    <article>
                      (edit with the Customer Reassurance module)
                    </article>
                  </div>
                </div>
                <div className="mainProductSubDetailItem">
                  <div className="subDetailItemImg">
                    <img
                      src="/image/deliveryProductDetail_1.jpg"
                      alt="Delivery"
                    />
                  </div>
                  <div className="subDetailItemContext">
                    <article>Delivery policy</article>
                    <article>
                      (edit with the Customer Reassurance module)
                    </article>
                  </div>
                </div>
                <div className="mainProductSubDetailItem">
                  <div className="subDetailItemImg">
                    <img src="/image/policyProductDetail.jpg" alt="Policy" />
                  </div>
                  <div className="subDetailItemContext">
                    <article>Return policy</article>
                    <article>
                      (edit with the Customer Reassurance module)
                    </article>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;

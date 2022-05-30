import React, { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartDrawer = () => {
  const [cartDrawerShow, setCartDrawerShow] = useState(false);
  const [drawerCartProducts, setDrawerCardProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/cart.json")
      .then((response) => response.json())
      .then((data) => setDrawerCardProducts(Object.entries(data)));
  }, [cartDrawerShow]);

  useEffect(() => {
    let productsPrice = 0;
    let productsDiscount = 0;
    drawerCartProducts.map((product) => {
      productsPrice += product[1].price * product[1].amount;
      productsDiscount += product[1].discount;
    });

    let priceDiscounted = (productsPrice * productsDiscount) / 100;
    let fixedPrice = productsPrice - priceDiscounted;
    let totalPrice = fixedPrice.toFixed(2);
    setTotalCartPrice(totalPrice);
  }, [drawerCartProducts]);

  const deleteCartProduct = (productID) => {
    setCartDrawerShow((prev) => !prev);
    Swal.fire({
      title: "Are Your Sure to Delete ?",
      icon: "warning",
      showDenyButton: true,
      customClass: {
        confirmButton: "btn btn-success mx-3",
        denyButton: "btn btn-danger",
      },
      buttonsStyling: false,
      reverseButtons: true,
      confirmButtonText: "Delete !",
      denyButtonText: `No keep it !`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://azeno-3045b-default-rtdb.firebaseio.com/cart/${productID}.json`,
          {
            method: "DELETE",
          }
        ).then((response) => {
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Product has been deleted !",
              timer: "1500",
              timerProgressBar: true,
            });
            setTimeout(() => {
              setCartDrawerShow((prev) => !prev);
            }, 1500);
          }
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Product is Safe :)",
          timer: "1500",
          timerProgressBar: true,
        });
        setTimeout(() => {
          setCartDrawerShow((prev) => !prev);
        }, 1500);
      }
    });
  };

  return (
    <>
      <button
        className="cartButton"
        onClick={() => setCartDrawerShow((prev) => !prev)}
      >
        <ShoppingBagOutlinedIcon />
      </button>
      <Drawer
        anchor="right"
        open={cartDrawerShow}
        style={{ zIndex: "9999999999" }}
      >
        <div className="DrawerHeader">
          <div className="cartCloseButton">
            <button onClick={() => setCartDrawerShow((prev) => !prev)}>
              <CloseIcon />
            </button>
          </div>
          <div className="cartDrawerContext">
            <p>Your Cart</p>
          </div>
        </div>
        {drawerCartProducts.length ? (
          <>
            <div className="DrawerContent">
              {drawerCartProducts.map((product) => (
                <div className="cartDrawerProductWrapper border-bottom" key={product[1].id}>
                  <Link to={`/product/${product[1].id}`} className="cartDrawerProductWrapper">
                    <div className="cartDrawerProductImg">
                      <img src={product[1].img} alt="CartProduct" />
                    </div>
                    <div className="cartDrawerProductDetail">
                      <span>{product[1].title}</span>
                      <span className="drawerCartProductSize">
                        size : {product[1].size}
                      </span>
                      <div className="drawerCartProductColor">
                        color :{" "}
                        <div
                          className={`drawerCartProductColorBox ${product[1].color}`}
                        ></div>
                      </div>
                      <span className="drawerCartProductDiscount">
                        discount : {product[1].discount}%
                      </span>
                      <span className="drawerCartProductPriceWrapper">
                        {product[1].amount} *{" "}
                        <strong className="drawerCartProductPrice">
                          $ {product[1].price}
                        </strong>
                      </span>
                    </div>
                  </Link>
                  <div className="cartDrawerProductDeleteButton">
                    <button
                      className="cartProductDelete"
                      onClick={() => deleteCartProduct(product[0])}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cartCheckOut">
              <div className="totalPrice">
                <h4>Total</h4>
                <h5>{totalCartPrice}</h5>
              </div>
              <div className="cartFeaturesButton">
                <Link to="/cart">
                  <div className="cartLinkButton">Cart</div>
                </Link>
                <Link to="/checkout">
                  <div className="checkOutLinkButton">CheckOut</div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="CartDrawerEmptyWrapper">
            <ShoppingBagOutlinedIcon />
            <h2>Cart is Empty !!</h2>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;

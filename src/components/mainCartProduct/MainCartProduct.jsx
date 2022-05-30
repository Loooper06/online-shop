import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./MainCartProduct.css";

const MainCartProduct = (props) => {
  //States
  const [mounted, setMounted] = useState(false);
  const [mainKey, setMainKey] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productAmount, setProductAmount] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  //Effects
  useEffect(() => {
    setMainKey(props.detail[0]);
    setProductDetail(props.detail[1]);
    setProductAmount(props.detail[1].amount);
    //Calculate Discount Price
    let Discount = (props.detail[1].price * props.detail[1].discount) / 100;
    let afterDiscount = props.detail[1].price - Discount;
    let priceAfterDiscount = afterDiscount.toFixed(2);
    setDiscountedPrice(priceAfterDiscount);
  }, [mounted]);

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  //Functions

  const amountButtons = [
    <Button
      className="py-2"
      key="decrease"
      size="small"
      onClick={() => decreaseAmount()}
    >
      -
    </Button>,
    <Button className="py-2" key="amount" size="small">
      {productAmount}
    </Button>,
    <Button
      className="py-2"
      key="increase"
      size="small"
      onClick={() => increaseAmount()}
    >
      +
    </Button>,
  ];

  const increaseAmount = () => {
    setProductAmount((prev) => (prev += 1));
  };
  const decreaseAmount = () => {
    if (productAmount < 2) {
      setProductAmount(1);
    } else {
      setProductAmount((prev) => (prev -= 1));
    }
  };

  //Update Product Condition

  const updateCondition = () => {
    let productUpdated = {
      id: productDetail.id,
      title: productDetail.title,
      img: productDetail.img,
      inStock: productDetail.inStock,
      price: productDetail.price,
      size: productDetail.size,
      discount: productDetail.discount,
      color: productDetail.color,
      categoryGender: productDetail.categoryGender,
      categoryGender: productDetail.categoryGender,
      amount: productAmount,
    };

    fetch(
      `https://azeno-3045b-default-rtdb.firebaseio.com/cart/${mainKey}.json`,
      {
        method: "PUT",
        body: JSON.stringify(productUpdated),
      }
    ).then((response) => response.json());
  };

  if (props.onSubmit) {
    updateCondition();
  }

  //Remove Product From Cart

  const removeProduct = () => {
    fetch(
      `https://azeno-3045b-default-rtdb.firebaseio.com/cart/${mainKey}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => console.log(response));
  };

  return (
    <>
      {productDetail && (
        <div className="mainCartProduct p-3">
          <div className="mainCartProductImg">
            <img src={productDetail.img} alt={productDetail.title} />
          </div>
          <div className="mainCartProductTitle">
            {productDetail.discount > 0 ? (
              <article className="cartDiscountTag">
                discounted {productDetail.discount + "%"}
              </article>
            ) : (
              <></>
            )}
            <Link to={`/product/${productDetail.id}`}>
              {productDetail.title}
            </Link>
            <div className="mainCartProductPrice">
              <p className={productDetail.discount > 0 ? "corePrice" : ""}>
                {productDetail.price}$
              </p>
              {productDetail.discount > 0 ? <p>{discountedPrice} $</p> : <></>}
            </div>
          </div>
          <div className="mainCartProductAmount">
            <ButtonGroup
              className="w-100"
              size="small"
              color="secondary"
              aria-label="medium secondary button group"
            >
              {amountButtons}
            </ButtonGroup>
          </div>
          <div className="DicountedPrice">
            <p>{discountedPrice} $</p>
          </div>
          <div className="productSize">
            <p>{productDetail.size}</p>
          </div>
          <div className="productColor">
            <span className={productDetail.color}></span>
          </div>
          <div className="removeProduct">
            <DeleteOutlineOutlinedIcon
              className="removeProductIcon"
              onClick={() => removeProduct()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainCartProduct;

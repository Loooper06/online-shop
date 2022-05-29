import React, { useState, useEffect } from "react";
import { Button , ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const MainCartProduct = (props) => {
  //States
  const [mainKey, setMainKey] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productAmount, setProductAmount] = useState();
  //Effects
  useEffect(() => {
    setMainKey(props.detail[0]);
    setProductDetail(props.detail[1]);
    setProductAmount(props.detail[1].amount);
  }, []);

  //Functions

  const amountButtons = [
    <Button className="py-3" key="decrease" onClick={() => decreaseAmount()}>
      -
    </Button>,
    <Button className="py-3" key="amount">
      {productAmount}
    </Button>,
    <Button className="py-3" key="increase" onClick={() => increaseAmount()}>
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

  return (
    <>
      {productDetail && (
        <div className="mainCartProduct">
          <div className="mainCartProductImg">
            <img src={productDetail.img} alt={productDetail.title} />
          </div>
          <div className="mainCartProductTitle">
            <Link to={`/product/${productDetail.id}`}>
              {productDetail.title}
            </Link>
            <p>{productDetail.price} $</p>
            {productDetail.discount > 0 ? <p>15 $</p> : <></>}
          </div>
          <div className="mainProductAmount">
            <ButtonGroup
              className="w-100"
              color="secondary"
              size="large"
              aria-label="medium secondary button group"
            >
              {amountButtons}
            </ButtonGroup>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      )}
    </>
  );
};

export default MainCartProduct;

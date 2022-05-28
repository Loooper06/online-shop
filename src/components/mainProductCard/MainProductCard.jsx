import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Button, ButtonGroup, Breadcrumbs, Typography } from "@mui/material";
import Swal from "sweetalert2";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import "./MainProductCard.css";

const MainProductCard = (props) => {
  // Destructuring
  const {
    id,
    title,
    price,
    img,
    subImg,
    subImg_1,
    subImg_2,
    inStock,
    discount,
    categoryGender,
  } = props;

  //States
  const [mainImages, setMainImages] = useState([
    { id: 1, img: img, active: true },
    { id: 2, img: subImg, active: false },
  ]);
  const [mainProductColor, setMainProductColor] = useState([
    { id: 1, color: "green", active: true },
    { id: 2, color: "pink", active: false },
    { id: 3, color: "yellow", active: false },
    { id: 4, color: "orange", active: false },
  ]);
  const [mainProductSize, setMainProductSize] = useState([
    { id: 1, size: "S", active: true },
    { id: 2, size: "M", active: false },
    { id: 3, size: "L", active: false },
    { id: 4, size: "XL", active: false },
  ]);
  const [productAmount, setProductAmount] = useState(1);
  // Effects

  useEffect(() => {
    let mainUpdatedImages = [...mainImages];
    let subImg_1Exist = mainImages.find((img) => img.img === subImg_1);
    let subImg_2Exist = mainImages.find((img) => img.img === subImg_2);
    if (subImg_2 && subImg_2Exist === undefined) {
      mainUpdatedImages.push({ id: 4, img: subImg_2, active: false });
    }
    if (subImg_1 && subImg_1Exist === undefined) {
      mainUpdatedImages.push({ id: 3, img: subImg_1, active: false });
    }
    setMainImages(mainUpdatedImages);
  }, []);

  //Functions
  //Img Active
  let mainImageActive = mainImages.find((img) => img.active === true);
  let mainImage = mainImageActive.img;

  const activeImg = (imgID) => {
    let images = [...mainImages];
    let imgActivated = images.map((item) => {
      if (item.id === imgID) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setMainImages(imgActivated);
  };

  //Color Active
  const activeColor = (colorID) => {
    let colors = [...mainProductColor];
    let colorActivated = colors.map((color) => {
      if (color.id === colorID) {
        color.active = true;
      } else {
        color.active = false;
      }
      return color;
    });
    setMainProductColor(colorActivated);
  };

  //Size Active

  const activeSize = (sizeID) => {
    let sizes = [...mainProductSize];
    let sizeActivated = sizes.map((size) => {
      if (size.id === sizeID) {
        size.active = true;
      } else {
        size.active = false;
      }
      return size;
    });
    setMainProductSize(sizeActivated);
  };

  // Product Amount

  let Discount = (price * discount) / 100;
  let afterDiscount = price - Discount;
  let priceAfterDiscount = afterDiscount.toFixed(2);

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

  // Add to Cart

  const addToCart = () => {};

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={7} className="p-5">
            <div className="mainProductImg">
              <img src={mainImage} alt={title} />
            </div>
            <div className=" mainSubImg">
              {mainImages.map((img) => (
                <div
                  key={img.id}
                  className={`SubImg ${img.active ? "Bordered" : ""}`}
                  onClick={() => activeImg(img.id)}
                >
                  <img src={img.img} alt="productSub" />
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={12} lg={5} className="py-5 px-3">
            <div className=" mainContentWrapper">
              <div className=" mainProductTitle">
                <div>
                  <h3>{title}</h3>
                </div>
                <div>
                  <span className={inStock === 0 ? "outOfStock" : ""}>
                    {inStock > 0 ? "" : "out of Stock"}
                  </span>
                  {discount ? (
                    <span
                      className={`mx-2 ${discount === 0 ? "" : "discountTag"}`}
                    >
                      {discount === 0 ? "" : `${discount} % Off`}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="mainProductPrice">
                <h4 className={discount > 0 ? "corePrice" : ""}>
                  {discount > 0 ? price : price + " $"}
                </h4>
                {discount > 0 ? (
                  <h4 className="dicountedPrice">{priceAfterDiscount} $</h4>
                ) : (
                  <></>
                )}
              </div>
              <div className="mainProductDetail">
                <article className="detailItem">
                  <h5 className="detailHead">category : </h5>
                  <p className="detailContent">{categoryGender}</p>
                </article>
                <article className="detailItem">
                  <h5 className="detailHead">In Stock : </h5>
                  <p className="detailContent">{inStock} item</p>
                </article>
                <article className="detailItem">
                  <h5 className="detailHead">Discount : </h5>
                  <p className="detailContent">{discount} %</p>
                </article>
              </div>
              <div className="mainProductDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima distinctio laudantium ut fugiat nisi voluptatibus
                  ratione perspiciatis iure molestiae eius quidem quisquam totam
                  quasi, eos est optio quaerat laborum eum repellat, hic nam
                  velit necessitatibus impedit. Repellendus libero error esse
                  voluptate. Est fuga optio asperiores!
                </p>
              </div>
              <div className=" mainProductColorPick">
                <p className="colorPickHead">Color : </p>
                <ul className="colorPickList">
                  {mainProductColor.map((color) => (
                    <li
                      key={color.id}
                      className={color.active ? "Bordered" : ""}
                      onClick={() => activeColor(color.id)}
                    >
                      <div className={`${color.color} colorPickListItem`}></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" mainProductSize">
                <p className="SizeHead">Size : </p>
                <ul className="SizeList">
                  {mainProductSize.map((size) => (
                    <li
                      key={size.id}
                      className={size.active ? "Bordered" : ""}
                      onClick={() => activeSize(size.id)}
                    >
                      {size.size}
                    </li>
                  ))}
                </ul>
              </div>
              <Container className="mainProductAddtoCart">
                <Row>
                  <Col xs={12} sm={4} xl={4}>
                    <div className=" mainProductAmount">
                      <ButtonGroup
                        className="w-100"
                        color="secondary"
                        size="large"
                        aria-label="medium secondary button group"
                      >
                        {amountButtons}
                      </ButtonGroup>
                    </div>
                  </Col>
                  <Col xs={12} sm={8} xl={8}>
                    <div className=" mainProductSubmit">
                      <button
                        onClick={() => addToCart(id)}
                        className="border py-3 w-100 py-2 addToCartSubmitButton"
                        disabled={inStock == 0}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Col>
                  <Col xs={12} md={12} xl={6}>
                    <div className=" mainProductAddWishlist">
                      <button className="addProductToWishlist">
                        <FavoriteBorderOutlinedIcon />
                        Add to Favorites
                      </button>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="mainProductCates">
                <div className="cate categoryCate">
                  <EditOutlinedIcon />
                  <h5 className="me-4 ms-2">Category : </h5>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/">Home</Link>
                    <Link
                      to={
                        categoryGender === "Men" || categoryGender === "Women"
                          ? `/shop/clothes/${categoryGender.toLowerCase()}`
                          : `/shop/${categoryGender.toLowerCase()}`
                      }
                    >
                      {categoryGender}
                    </Link>
                  </Breadcrumbs>
                </div>
                <div className="cate tagsCate">
                  <BeenhereOutlinedIcon />
                  <h5 className="me-4 ms-2">Tags : </h5>
                  <Breadcrumbs aria-label="breadcrumb" separator=",">
                    <Typography color="text.primary">Clothes</Typography>
                    <Typography color="text.primary">Fitness</Typography>
                    <Typography color="text.primary">Tech</Typography>
                  </Breadcrumbs>
                </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainProductCard;

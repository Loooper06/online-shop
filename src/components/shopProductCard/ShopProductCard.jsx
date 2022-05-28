import React, { useEffect, useState } from "react";
import { Rating, Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import './ShopProductCard.css'

const ShopProductCard = (props) => {
  const [quickShow, setQuickShow] = useState(false);
  const [onCart , setOnCart] = useState([])
  const [modalImages, setModalImages] = useState([
    { id: 1, img: props.img, active: true },
    { id: 2, img: props.subImg, active: false },
  ]);
  const [modalProductColor, setModalProductColor] = useState([
    { id: 1, color: "green", active: true },
    { id: 2, color: "pink", active: false },
    { id: 3, color: "yellow", active: false },
    { id: 4, color: "orange", active: false },
  ]);
  const [modalProductSize, setModalProductSize] = useState([
    { id: 1, size: "S", active: true },
    { id: 2, size: "M", active: false },
    { id: 3, size: "L", active: false },
    { id: 4, size: "XL", active: false },
  ]);

  const [productAmount, setProductAmount] = useState(1);

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

  useEffect(() => {
    let modalUpdatedImages = [...modalImages];
    let subImg_1Exist = modalImages.find((img) => img.img === props.subImg_1);
    let subImg_2Exist = modalImages.find((img) => img.img === props.subImg_2);
    if (props.subImg_2 && subImg_2Exist === undefined) {
      modalUpdatedImages.push({ id: 4, img: props.subImg_2, active: false });
    }
    if (props.subImg_1 && subImg_1Exist === undefined) {
      modalUpdatedImages.push({ id: 3, img: props.subImg_1, active: false });
    }
    setModalImages(modalUpdatedImages);
  }, []);

  useEffect(() => {
    fetch('https://azeno-3045b-default-rtdb.firebaseio.com/cart.json')
    .then(response => response.json())
    .then(data => setOnCart(Object.entries(data)))
  } , [])

  const activeImg = (imgID) => {
    let images = [...modalImages];
    let imgActivated = images.map((item) => {
      if (item.id === imgID) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setModalImages(imgActivated);
  };

  const activeColor = (colorID) => {
    let colors = [...modalProductColor];
    let colorActivated = colors.map((color) => {
      if (color.id === colorID) {
        color.active = true;
      } else {
        color.active = false;
      }
      return color;
    });
    setModalProductColor(colorActivated);
  };

  const activeSize = (sizeID) => {
    let sizes = [...modalProductSize];
    let sizeActivated = sizes.map((size) => {
      if (size.id === sizeID) {
        size.active = true;
      } else {
        size.active = false;
      }
      return size;
    });
    setModalProductSize(sizeActivated);
  };

  let modalImageActive = modalImages.find((img) => img.active === true);
  let mainImage = modalImageActive.img;

  let Discount = (props.price * props.discount) / 100;
  let afterDiscount = props.price - Discount;
  let priceAfterDiscount = afterDiscount.toFixed(2);

  const addToCart = () => {
    let colorAddtoCart = modalProductColor.find((color) => color.active);
    let sizeAddtoCart = modalProductSize.find((size) => size.active);

    let mainProduct = {
      id: props.id,
      title: props.title,
      img: props.img,
      amount: productAmount,
      color: colorAddtoCart.color,
      size: sizeAddtoCart.size,
      price: props.price,
      categoryGender: props.categoryGender,
      discount: props.discount,
      inStock: props.inStock,
    };

    let isInCart = onCart.find((product) => product[1].id === props.id);
    if (!isInCart) {
      fetch("https://azeno-3045b-default-rtdb.firebaseio.com/cart.json", {
        method: "POST",
        body: JSON.stringify(mainProduct),
      }).then((response) => {
        response.json();
        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Product successfully added to your shopping cart",
          });
        }
      });
    }

    setQuickShow(false);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  return (
    <div className="productCard ShopProductCard" key={props.id}>
      <div className="productCardImg">
        <img src={props.img} alt="product" />
        <div className="productCardQuickOptions d-flex justify-content-center align-items-center">
          <button onClick={() => addToCart()} className="OptionsButton">
            <ShoppingBagOutlinedIcon />
          </button>
          <button className="OptionsButton">
            <FavoriteBorderOutlinedIcon />
          </button>
          <button
            onClick={() => setQuickShow((prev) => !prev)}
            className="OptionsButton"
          >
            <SearchIcon />
          </button>
        </div>
        <div className="productCardSubImg">
          <img src={props.subImg} alt="product" />
        </div>
        <div className="productCardTags">
        {props.discount ? (
          <span className={props.discount === 0 ? "" : "discountTag"}>
            {props.discount === 0 ? "" : `${props.discount} % Off`}
          </span>
        ) : (
          <></>
        )}
        <span className={props.inStock === 0 ? "outOfStock" : ""}>
          {props.inStock > 0 ? "" : "out of Stock"}
        </span>
      </div>
      </div>

      <div className="productCardCategory">
        <div className="productCategory text-muted">{props.categoryGender}</div>
        <div className="productRating">
          <Rating name="read-only" value={3} readOnly size="small" />
        </div>
      </div>
      <Link to={`/product/${props.id}`}>
        <div className="productCardTitle shopCardFwLight">
          <h6>{props.title}</h6>
        </div>
        <div className="productCardPrice shopCardFwLight">
          <h6 className={props.discount > 0 ? "corePrice" : ""}>
            {props.discount > 0 ? props.price : props.price + "$"}
          </h6>
          {props.discount > 0 ? <h6>{priceAfterDiscount} $</h6> : <></>}
        </div>
      </Link>

      <Modal
        show={quickShow}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        className="quickModal"
        centered
      >
        <Modal.Header className="d-flex justify-content-end">
          <button
            onClick={() => setQuickShow((prev) => !prev)}
            className="quickModalCloseButton"
          >
            <CloseOutlinedIcon />
          </button>
        </Modal.Header>
        <Modal.Body className="shopCardFwLight">
          <Container fluid>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <div className="modalImgWrapper">
                  <div className="modalMainImg">
                    <img src={mainImage} alt="product" />
                  </div>
                  <div className="modalSubImg">
                    {modalImages.map((img) => (
                      <div
                        key={img.id}
                        className={`SubImg ${img.active ? "Bordered" : ""}`}
                        onClick={() => activeImg(img.id)}
                      >
                        <img src={img.img} alt="productSub" />
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} lg={6}>
                <div className="modalContentWrapper">
                  <div className="modalProductTitle">
                    <div>
                      <h3>{props.title}</h3>
                    </div>
                    <div>
                      <span className={props.inStock === 0 ? "outOfStock" : ""}>
                        {props.inStock > 0 ? "" : "out of Stock"}
                      </span>
                    </div>
                  </div>
                  <div className="modalProductPrice">
                    <h4 className="corePrice">{props.price} </h4>
                    <h4 className="dicountedPrice">{priceAfterDiscount} $</h4>
                  </div>
                  <div className="modalProductDetail">
                    <article className="detailItem">
                      <h5 className="detailHead">category : </h5>
                      <p className="detailContent">{props.categoryGender}</p>
                    </article>
                    <article className="detailItem">
                      <h5 className="detailHead">In Stock : </h5>
                      <p className="detailContent">{props.inStock} item</p>
                    </article>
                    <article className="detailItem">
                      <h5 className="detailHead">Discount : </h5>
                      <p className="detailContent">{props.discount} %</p>
                    </article>
                  </div>
                  <div className="modalProductDescription">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima distinctio laudantium ut fugiat nisi voluptatibus
                      ratione perspiciatis iure molestiae eius quidem quisquam
                      totam quasi, eos est optio quaerat laborum eum repellat,
                      hic nam velit necessitatibus impedit. Repellendus libero
                      error esse voluptate. Est fuga optio asperiores!
                    </p>
                  </div>
                  <div className="modalProductColorPick">
                    <p className="colorPickHead">Color : </p>
                    <ul className="colorPickList">
                      {modalProductColor.map((color) => (
                        <li
                          key={color.id}
                          className={color.active ? "Bordered" : ""}
                          onClick={() => activeColor(color.id)}
                        >
                          <div
                            className={`${color.color} colorPickListItem`}
                          ></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="modalProductSize">
                    <p className="SizeHead">Size : </p>
                    <ul className="SizeList">
                      {modalProductSize.map((size) => (
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
                  <Container className="modalProductAddtoCart">
                    <Row>
                      <Col xs={12} md={12} xl={4}>
                        <div className="modalProductAmount">
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
                      <Col xs={12} md={12} xl={8}>
                        <div className="modalProductSubmit">
                          <button
                            onClick={() => addToCart(props.id)}
                            className="border py-3 w-100 py-2 addToCartSubmitButton"
                            disabled={props.inStock == 0}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </Col>
                      <Col xs={12} md={12} xl={6}>
                        <div className="modalProductAddWishlist">
                          <button className="addProductToWishlist">
                            <FavoriteBorderOutlinedIcon />
                            Add to Favorites
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ShopProductCard;

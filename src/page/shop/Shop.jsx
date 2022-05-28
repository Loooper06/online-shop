import React, { useEffect, useState } from "react";
import ShopCategoryCarousel from "./../../components/shopCategoryCarousel/ShopCategoryCarousel";
import { Link, Outlet } from "react-router-dom";
import {
  Breadcrumbs,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Rating,
  Checkbox,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "aos/dist/aos.css";
import "./Shop.css";

const Shop = () => {
  const [mounted, setMounted] = useState(false);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/newProducts.json")
      .then((response) => response.json())
      .then((data) => setNewProducts(Object.entries(data)));
  }, [mounted]);

  return (
    <div>
      <div className="shopHeader">
        <h2>Shop</h2>
        <Breadcrumbs aria-label="breadcrumb" className="my-3">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Typography color="text.primary">Shop</Typography>
        </Breadcrumbs>
        <ShopCategoryCarousel />
      </div>
      <Container fluid className="mt-5">
        <Row>
          <Col xs={0} sm={3}>
            <div className="topCategoryPicker">
              <div className="topCategoryPickerHeader">
                <h5>Shop</h5>
              </div>
              <div className="topCategoryPickerContent">
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <CircleOutlinedIcon className="accordionSvgColored" />
                    }
                  >
                    <Typography>
                      <Link to="/shop/clothes">Clothes</Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="topCategoryPickerSubList">
                      <li>
                        <Link to="/shop/clothes/men">Men</Link>
                      </li>
                      <li>
                        <Link to="/shop/clothes/women">Women</Link>
                      </li>
                      <li>
                        <Link to="/shop/clothes/kid">Kid</Link>
                      </li>
                      <li>
                        <Link to="/shop/clothes/jacket">Jacket</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <CircleOutlinedIcon className="accordionSvgColored" />
                    }
                  >
                    <Typography>
                      <Link to="/shop/accessory">Accessory</Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="topCategoryPickerSubList">
                      <li>
                        <Link to="/shop/accessory/staitionary">
                          Staitionary
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop/accessory/homeAccessories">
                          Home Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop/accessory/hatsAndCaps">
                          Hat's & Caps
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop/accessory/babyShoes">Baby Shoes</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <CircleOutlinedIcon className="accordionSvgColored" />
                    }
                  >
                    <Typography>
                      <Link to="/shop/kid">Kids</Link>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="topCategoryPickerSubList">
                      <li>
                        <Link to="/shop/kid/babysuits">Baby Suits</Link>
                      </li>
                      <li>
                        <Link to="/shop/kid/jeans">Jeans</Link>
                      </li>
                      <li>
                        <Link to="/shop/kid/scarves">Scarves</Link>
                      </li>
                      <li>
                        <Link to="/shop/kid/sunglasses">Sun Glasses</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <Typography>
                      <Link to="/shop/footwear">Foot Wear</Link>
                    </Typography>
                  </AccordionSummary>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <Typography>
                      <Link to="/shop/fitness">Fitness</Link>
                    </Typography>
                  </AccordionSummary>
                </Accordion>
                <Accordion>
                  <AccordionSummary>
                    <Typography>
                      <Link to="/shop/tech">Tech</Link>
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </div>
            </div>
            <div className="topCategoryFilter">
              <div className="topCategoryFilterHeader">
                <h5>Filter By</h5>
              </div>
              <div className="topCategoryFilterContent">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Category</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Clothes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Fitness"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Foot Wear"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Kids"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Tech"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Size</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="S"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="M"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="L"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="XL"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Availability</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="In Stock"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Out Of Stock"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Brand</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Fitness"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Foot Wear"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Kids"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Men"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Tech"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: pink[800],
                              "&.Mui-checked": {
                                color: pink[600],
                              },
                            }}
                          />
                        }
                        label="Women"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="newProducts">
              <div className="newProductsHeader">
                <h5>New Products</h5>
              </div>
              <div className="newProductsContent">
                {newProducts &&
                  newProducts.map((product) => (
                    <Link
                      to={`/product/${product[1].id}`}
                      key={product[1].id}
                    >
                      <div className="newProductItem">
                        <div className="newProductItemImg">
                          <img src={product[1].img} alt={product[1].title} />
                        </div>
                        <div className="newProductItemDetails">
                          <div className="newProductItemRating">
                            <Rating name="read-only" value={4} readOnly />
                          </div>
                          <div className="newProductItemTitle">
                            <h6>{product[1].title}</h6>
                          </div>
                          <div className="newProductItemPrice">
                            <p
                              className={`newProductItemMainPrice ${
                                product[1].discount > 0 ? "discounted" : ""
                              }`}
                            >
                              {product[1].price}$
                            </p>
                            {product[1].discount > 0 ? (
                              <p className="newProductItemDiscountedPrice">
                                {(
                                  product[1].price -
                                  (product[1].price * product[1].discount) / 100
                                ).toFixed(2)}
                                $
                              </p>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </Col>
          <Col xs={12} sm={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;

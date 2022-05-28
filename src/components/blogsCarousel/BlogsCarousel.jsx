import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import BlogCarouselCard from "../blogCarouselCard/BlogCarouselCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./BlogsCarousel.css";

const BlogsCarousel = (props) => {
  const [blogsItem, setBlogsItem] = useState([]);
  const [blogMounted, setBlogMounted] = useState(false);

  useEffect(() => {
    setBlogMounted(true);
  }, []);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogsItem(Object.entries(data)));
  }, [blogMounted]);

  let options = {
    items: 3,
    nav: false,
    dots: false,
    stagePadding: 20,
    margin: 30,
    merge: true,
    mergeFit: true,
    responsive: {
      1200: { items: 3 },
      768: { items: 2 },
      0: { items: 1, dots: true },
    },
  };

  return (
    <div className="blogsCarousel">
      <div className="blogsCarouselWrapper">
        <div
          className="blogsCarouselTitle"
          data-aos="fade-up"
          data-aos-duration="2200"
          data-aos-offset="800"
        >
          <h1>{props.title}</h1>
        </div>
        <Container
          data-aos="fade-up"
          data-aos-duration="2200"
          data-aos-offset="800"
        >
          <Row>
            <Col xs={12}>
              {blogsItem && (
                <OwlCarousel {...options} className="mt-5 owl-theme">
                  {blogsItem.map((blog) => (
                    <BlogCarouselCard {...blog[1]} key={blog[1].id} />
                  ))}
                </OwlCarousel>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="viewMoreBlogs">
        <Link to="/blog">VIEW MORE</Link>
      </div>
    </div>
  );
};

export default BlogsCarousel;

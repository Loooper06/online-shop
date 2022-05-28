import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import BlogCarouselCard from "../../components/blogCarouselCard/BlogCarouselCard";

const Blog = () => {
  // States

  const [blogs, setBlogs] = useState([]);

  //Effects
  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(Object.entries(data)));
  }, []);

  return (
    <div className="blogs">
      <div className="blogsHeader">
        <h3>Azeno - Sport Store</h3>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="fw-light text-black">
            Home
          </Link>
          <Typography className="fw-light text-muted">Blogs</Typography>
        </Breadcrumbs>
      </div>
      <div className="blogsWrapper">
          <Container className="mt-5">
              <Row>
                  {blogs.map(blog => (
                      <Col xs={12} sm={12} md={6} key={blog[1].id}>
                          <BlogCarouselCard {...blog[1]} />
                      </Col>
                  ))}
              </Row>
          </Container>
      </div>
    </div>
  );
};

export default Blog;

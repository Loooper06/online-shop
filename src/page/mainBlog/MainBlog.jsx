import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./MainBlog.css";

const MainBlog = () => {
  let params = useParams();

  //States
  const [mainBlog, setMainBlog] = useState();
  const [shareOptions, setShareOptions] = useState([
    {
      id: 1,
      title: "Twitter",
      path: "https://twitter.com",
      icon: <TwitterIcon />,
    },
    {
      id: 2,
      title: "FaceBook",
      path: "https://facebook.com",
      icon: <FacebookIcon />,
    },
    {
      id: 3,
      title: "Pinterest",
      path: "https://pinterest.com",
      icon: <PinterestIcon />,
    },
    {
      id: 4,
      title: "Instagram",
      path: "https://instagram.com",
      icon: <InstagramIcon />,
    },
    {
      id: 5,
      title: "Telegram",
      path: "https://Telegram.org",
      icon: <TelegramIcon />,
    },
    {
      id: 6,
      title: "WhatsApp",
      path: "https://whatsapp.com",
      icon: <WhatsAppIcon />,
    },
  ]);

  // Effects
  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        let blogs = Object.entries(data);
        let blog = blogs.find((blog) => blog[1].id == params.blogID);
        setMainBlog(blog[1]);
      });
  }, []);
  console.log(mainBlog);

  return (
    <>
      {mainBlog && (
        <div className="mainBlog">
          <div className="mainBlogHeader">
            <h2>Azeno - Sport Store</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" className="fw-light text-black">
                Home
              </Link>
              <Link to="/blog" className="fw-light text-black">
                Blog
              </Link>
              <Typography className="fw-light text-muted">
                {mainBlog.title}
              </Typography>
            </Breadcrumbs>
          </div>
          <Container fluid className="pt-5">
            <Row>
              <Col xs={12} className="mainBlogStatusBar p-4 fw-light">
                <Breadcrumbs separator="|">
                  <Typography className="fw-light statusBarItem">
                    <EventNoteIcon />
                    {mainBlog.date}
                  </Typography>
                  <Typography className="fw-light statusBarItem">
                    <PersonPinIcon />
                    {mainBlog.author}
                  </Typography>
                  <Typography className="fw-light statusBarItem">
                    <VisibilityOutlinedIcon /> {mainBlog.review} Reviews
                  </Typography>
                  <Typography className="fw-light statusBarItem">
                    <ChatBubbleOutlineOutlinedIcon /> {mainBlog.comments}{" "}
                    Comments
                  </Typography>
                </Breadcrumbs>
              </Col>
              <Col xs={12} className="mainBlogImg">
                <img src={mainBlog.img} alt={mainBlog.title} />
              </Col>
              <Col
                xs={12}
                className="mainBlogContext mt-5 p-5 text-muted fw-light"
              >
                <p>{mainBlog.description}</p>
                <p>
                  Suspendisse posuere, diam in bibendum lobortis, turpis ipsum
                  aliquam risus, sit amet dictum ligula lorem non nisl. Ut vitae
                  nibh id massa vulputate euismod ut quis justo. Ut bibendum sem
                  at massa lacinia, eget elementum ante consectetur. Nulla id
                  pharetra dui, at rhoncus urna. Maecenas non porttitor purus.
                  Nullam ullamcorper nisl quis ornare molestie.
                </p>
                <p>
                  Etiam eget erat est. Phasellus elit justo, mattis non lorem
                  non, aliquam aliquam. Sed fermentum consectetur magna, eget
                  semper ante. Aliquam scelerisque justo velit. Fusce cursus
                  blandit dolor, in sodales urna vulputate lobortis. Nulla ut
                  tellus turpis. Nullam lacus sem, volutpat id odio sed, cursus
                  tristique eros. Duis at pellentesque magna. Donec magna nisi,
                  vulputate ac nulla eu, ultricies tincidunt tellus. Nunc
                  tincidunt sem urna, nec venenatis libero vehicula ut.
                </p>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Curabitur faucibus aliquam
                  pulvinar. Vivamus mattis volutpat erat, et congue nisi semper
                  quis. Cras vehicula dignissim libero in elementum. Mauris sit
                  amet dolor justo. Morbi consequat velit vel est fermentum
                  euismod. Curabitur in magna augue.
                </p>
              </Col>
              <Col xs={12} className="mainBlogShareOptions mt-3 px-5">
                <h4>Share this Post</h4>
                <ul className="mainBlogShareOptionList">
                  {shareOptions.map((option) => (
                    <li className={`mainBlogShareOptionListItem ${option.title}`} key={option.id}>
                      <a href={option.path}>
                        {option.icon} {option.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} className="mainBlogComment's mt-3 px-5">
                <h5>Comment's</h5>
                {mainBlog.comments.length > 0 ? (
                  <div></div>
                ) : (
                  <div className="EmptyComments py-2 px-3 text-muted">
                    <p>No comments at this moment !</p>
                  </div>
                )}
              </Col>
              <Col xs={12} className="mainBlogAddComment"></Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default MainBlog;

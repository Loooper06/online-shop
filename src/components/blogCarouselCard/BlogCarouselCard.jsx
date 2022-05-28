import React from "react";
import { Link } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import "./BlogCarouselCard.css";

const BlogCarouselCard = (props) => {
  return (
    <div className="blogCarouselCard">
      <Link to={`/blog/${props.id}`}>
        <div className="blogCarouselCardImg">
          <img src={props.img} alt="Blog" />
          <div className="blogCarouselCardImgOverlay">
            <div className="blogCarouselCardImgOverlayDate">
              <EventNoteIcon />
              {props.date}
            </div>
            <div className="blogCarouselCardImgOverlayAuthor">
              <PersonPinIcon />
              {props.author}
            </div>
          </div>
        </div>
      </Link>
      <div className="blogCarouselCardBody">
        <div className="blogCarouselCardTitle">
          <Link to={`/blog/${props.id}`}>
          <h5>{props.title}</h5>
        </Link>
        </div>
        <div className="blogCarouselCardDecription">
          <p>{props.description}</p>
        </div>
        <div className="blogCarouselCardReadMore">
          <Link to={`/blog/${props.id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCarouselCard;

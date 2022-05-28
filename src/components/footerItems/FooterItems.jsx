import React from "react";
import { Link } from "react-router-dom";
import './FooterItems.css'

const FooterItems = (props) => {
  return (
    <div className="footerItem">
      <article className="footerItemTitle">{props.title}</article>
      <ul className="footerItemsList">
          {props.subItems.map(item => (
              <li key={item.id}>
                  <Link to={item.subPath}>{item.subTitle}</Link>
              </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterItems;

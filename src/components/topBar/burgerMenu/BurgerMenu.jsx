import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Drawer } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './BurgerMenu.css'

const BurgerMenu = () => {
  const [burgerDrawerShow, setBurgerDrawerShow] = useState(false);

  return (
    <div className="burgerMenu d-lg-none">
      <IconButton color="default" aria-label="add an alarm"
      onClick={() => setBurgerDrawerShow(prev => !prev)}
      >
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer open={burgerDrawerShow} anchor='right' className="d-block d-lg-none">
        <div className="burgerDrawerHeader border-0">
          <div className="cartCloseButton">
            <button onClick={() => setBurgerDrawerShow((prev) => !prev)}>
              <CloseOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="burgerContent">
            <ul className="burgerContentList">
                <li className="burgerContentListItem">
                    <Link to='/'>Home</Link>
                </li>
                <li className="burgerContentListItem">
                    <Link to='/shop/allProducts'>Shop</Link>
                </li>
                <li className="burgerContentListItem">
                    <Link to='/blog'>Blog</Link>
                </li>
            </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;

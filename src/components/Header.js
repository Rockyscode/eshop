import React from "react";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBagOutlined } from "@mui/icons-material";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StoreIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBagOutlined className="itemBasket" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

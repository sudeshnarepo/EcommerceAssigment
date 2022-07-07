import React, { useState } from "react";
import "./Navbar.css";
import shoppingBag from "../../assets/Icons/shopping-bag.svg";
import hamburgerIcon from "../../assets/Icons/align-justify.svg";
import timesIcon from "../../assets/Icons/x.svg";
import veniaLogo from "../../assets/Icons/venia-logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.cart_reducer.cart);

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu === true ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <header className="navbar aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <nav className="navbar__nav" role="navigation" aria-label="main menu">
          <button
            className="navbar__nav-hamburger" onClick={handleClick} aria-expanded="true">
            <img src={hamburgerIcon} alt="hamburger" aria-hidden="true" />
          </button>
          <div className="navbar__nav-logo" aria-labelledby="navbar title">
            <Link to="/"><img src={veniaLogo} alt="Logo" aria-hidden="true" /></Link>
          </div>
          <div className={showMenu ? "navbar__nav_link active" : "navbar__nav_link"}>
            <div className="navbar__btn-close">
              <h2>Shop Categories</h2>
              <img onClick={handleClick} src={timesIcon} alt="Button to close fliter bar"/>
            </div>
            <ul tabIndex={0} role="listbox">
              <li>
                <Link to="/" target="_self">Home</Link>
              </li>
              <li>
                <Link to="/" target="_self">Women</Link>
              </li>
              <li>
                <Link to="/" target="_self">Men</Link>
              </li>
              <li>
                <Link to="/" target="_self">Smart Gear</Link>
              </li>
              <li>
                <Link to="/" target="_self">Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__nav-cart">
            <Link to="/Cart">
              <img src={shoppingBag} alt="shopping cart" />
              <span>({state.length})</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

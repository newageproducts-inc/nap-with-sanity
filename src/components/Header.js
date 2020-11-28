import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ReactMegaMenu from "react-mega-menu"

// Material UI
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
import Dropdown from "./Dropdown";
// import MenuItem from "@material-ui/core/MenuItem";
// import Fade from "@material-ui/core/Fade";


function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      
      


      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">
          <img
            className="logo"
            src={require("../assets/img/NewAge-logo.png")}
            alt=""
          />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links ff-pr" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links ff-pr"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
          
          <li className="nav-item">
            <Link to="/about" className="nav-links ff-pr" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links ff-pr" onClick={closeMobileMenu}>
              Main Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links ff-pr" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/accordion"
              className="nav-links ff-pr"
              onClick={closeMobileMenu}
            >
              Accordion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/showhide"
              className="nav-links ff-pr"
              onClick={closeMobileMenu}
            >
              ShowHide
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sanity" className="nav-links ff-pr" onClick={closeMobileMenu}>
              Sanity
            </Link>
          </li>
        </ul>

        {/* <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/services">Services</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/portfolio">Portfolio</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/about">About</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/team">Team</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/contact">Contact</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/accordion">Accordion</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link js-scroll-trigger">
                  <Link to="/showhide">ShowHide</Link>
                </span>
              </li>
            </ul>
          </div> */}
      </div>
    </nav>
  );
}

export default Header;

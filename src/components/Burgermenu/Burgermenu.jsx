import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./burgermenu.scss"; // You can create a CSS file for styling

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;

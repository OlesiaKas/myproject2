import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="container">
      <p>Buhalterinių paslaugų įmonė</p>
      <ul>
        <li>
          <NavLink to="/">Pagrindinis puslapis</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Atsiliepimai</NavLink>
        </li>
        <li>
          <NavLink to="/useful">Naudinga informacija</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontaktai</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

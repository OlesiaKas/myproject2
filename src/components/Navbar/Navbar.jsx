import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="my-container">
      <p>Buhalterinių paslaugų įmonė</p>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
          >
            Pagrindinis puslapis
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
          >
            Atsiliepimai
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useful"
            style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
          >
            Naudinga informacija
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return isActive ? { color: "black" } : {};
            }}
          >
            Kontaktai
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

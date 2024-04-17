import React from "react";
import Button from "../Buttons/Buttons";
import "./card.scss";

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Link to={props.profile_link} className="button">
        Daugiau informacijos
      </Link>

      <Button
        type="gold"
        onClick={() => (window.location.href = props.profile_link)}
      >
        Daugiau informacijos
      </Button>
    </div>
  );
}

export default Card;

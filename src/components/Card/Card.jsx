import React from "react";
import Button from "../Buttons/Buttons";
import "./card.scss";

function Card(props) {
  return (
    <div className="item">
      <h5>{props.title}</h5>
      <h6>{props.description}</h6>

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

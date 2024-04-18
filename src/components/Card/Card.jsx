import React from "react";
import Button from "../Buttons/Buttons";
import "./card.scss";

function Card(props) {
  return (
    <div className="item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

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

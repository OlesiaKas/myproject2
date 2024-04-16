import React from "react";
import Button from "../Buttons/Buttons";
import "./card.scss";

function Card(props) {
  return (
    <div className="item">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Button type="gold" onClick={() => window.open(props.link)}></Button>
    </div>
  );
}

export default Card;

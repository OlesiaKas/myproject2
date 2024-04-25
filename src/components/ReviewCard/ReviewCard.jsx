import React from "react";
import "./reviewcard.scss";

function ReviewCard(props) {
  return (
    <div className="reviewcard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ReviewCard;

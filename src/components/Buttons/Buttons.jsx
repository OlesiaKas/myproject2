import React from "react";
import "./buttons.scss";

const Button = ({ type, onClick }) => {
  let styles = "custom-btn";

  switch (type) {
    case "gold":
      styles += " gold";
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={styles}>
      <span title="buttonSpan">Daugiau informacijos</span> <i />
    </button>
  );
};

export default Button;

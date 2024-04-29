import React from "react";
import "./buttons.scss";

const Button = ({ children, type, onClick }) => {
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
      <span title="buttonSpan">{children}</span> <i />
    </button>
  );
};

export default Button;

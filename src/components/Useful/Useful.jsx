import React from "react";
import Button from "../Buttons/Buttons";

import "./useful.scss";

function Useful() {
  return (
    <>
      <div className="useful">
        <div>Naudinga informacija:</div>
        <Button
          type="gold"
          onClick={() => (window.location.href = "/currency")}
        >
          Valiutos keitimas
        </Button>
      </div>
      ;
    </>
  );
}

export default Useful;

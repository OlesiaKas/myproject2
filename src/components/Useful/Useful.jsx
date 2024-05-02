import React from "react";
import Button from "../Buttons/Buttons";

import "./useful.scss";

function Useful() {
  return (
    <>
      <div className="useful">
        <div>Naudinga informacija:</div>
        <div>
          <Button
            type="gold"
            onClick={() => (window.location.href = "/currency")}
          >
            Valiutos keitimas
          </Button>
        </div>
        <div>
          <Button
            type="gold"
            onClick={() => (window.location.href = "/taxcalculator")}
          >
            Algos skaičiavimas
          </Button>
        </div>
      </div>
      ;
    </>
  );
}

export default Useful;

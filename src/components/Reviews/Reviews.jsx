import React, { useContext } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";
import { AppContext } from "../../context/AppContext";

import "./reviews.scss";

function Reviews() {
  const { data } = useContext(AppContext);
  return (
    <div className="reviews-container">
      {data.map((item) => (
        <ReviewCard
          key={item.id}
          title={item.RevTitle}
          description={item.RevName}
        />
      ))}
    </div>
  );
}

export default Reviews;

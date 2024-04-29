import React, { useContext } from "react";

import AddReview from "../Reviews/AddReview";

import ReviewCard from "../ReviewCard/ReviewCard";
import { AppContext } from "../../context/AppContext";

import "./reviews.scss";
function AllReviews() {
  const { data } = useContext(AppContext);

  return (
    <>
      <div>
        <AddReview />;
      </div>
      <div className="reviews-container">
        {data.map((item, index) => (
          <ReviewCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default AllReviews;

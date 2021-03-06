import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  console.log("rating", rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} color="gold" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={farStar} color="gold" />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;

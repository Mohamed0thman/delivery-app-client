import React from "react";
import { Link, withRouter } from "react-router-dom";

import StarRating from "../star-rating/star-rating.component.jsx";

import "./store-item.styless.scss";

const StoreItem = ({ match, store }) => {
  const { name, baseLink, image, rating } = store;
  return (
    <div className="store-item">
      <Link to={`${match.url}/${name}`}>
        <div className="store-item__image">
          <img src={baseLink + "/" + image} alt="" />
        </div>
        <div className="store-item__name">{name}</div>
        <div className="store-item__rating">{rating}</div>
        <StarRating rating={rating} />
      </Link>
    </div>
  );
};

export default withRouter(StoreItem);

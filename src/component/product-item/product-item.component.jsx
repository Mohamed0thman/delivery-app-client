import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./product-item.styless.scss";

const ProductItem = ({ match, product }) => {
  const { name, baseLink, image, price } = product;
  return (
    <div className="product-item">
      <Link to={`${match.url}/${name}`}>
        <div className="product-item__image">
          <img src={baseLink + "/" + image} alt="" />
        </div>
        <div className="product-item__name">{name}</div>
        <div className="product-item__name">{price} $</div>
      </Link>
    </div>
  );
};

export default withRouter(ProductItem);

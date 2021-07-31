import React from "react";

import "./product-item.styless.scss";

const ProductItem = ({ match, product }) => {
  const { name, baseLink, image, price } = product;
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={baseLink + "/" + image} alt="" />
      </div>
      <div className="product-item__name">{name}</div>
      <div className="product-item__name">{price} $</div>
    </div>
  );
};

export default ProductItem;

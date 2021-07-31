import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./category-item.styless.scss";

const CategoryItem = ({ match, category }) => {
  return (
    <Link to={`stores/${category.name}`}>
      <div className="category-item">
        <div className="category-item__image">
          <img src={category.baseLink + "/" + category.image} alt="" />
        </div>
        <div className="category-item__text">
          <h4 className="category-item__name">{category.name}</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Expedita,nam. Placeat cupiditate possimus
          </p>

          <span style={{ color: "orange" }}>More</span>
        </div>{" "}
      </div>
    </Link>
  );
};

export default withRouter(CategoryItem);

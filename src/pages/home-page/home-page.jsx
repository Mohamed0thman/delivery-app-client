import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Map from "../../component/map/map.component";

import CategoryItem from "../../component/category-item/category-item.component";

import { fetchAllStores } from "../../redux/stores/stores-action";
import { fetchAllCategories } from "../../redux/categories/categories-action";

import "./home-page.scss";

const HomePage = ({
  fetchAllStores,
  fetchAllCategories,
  stores,
  categories,
}) => {
  const [placedOrder, setPlacedOrder] = useState("");

  useEffect(() => {
    fetchAllStores();
  }, [fetchAllStores]);
  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  const handleOnChange = (data) => {
    setPlacedOrder(data.features[0].place_name);
  };

  return (
    <div>
      <Map stores={stores} handleOnChange={handleOnChange} />

      <input type="text" value={placedOrder} readOnly />

      <div className="categories">
        {categories &&
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stores: state.stores.stores,
  categories: state.categories.categories,
});

const mapDispatchToprops = (dispatch) => ({
  fetchAllStores: () => dispatch(fetchAllStores()),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToprops)(HomePage);

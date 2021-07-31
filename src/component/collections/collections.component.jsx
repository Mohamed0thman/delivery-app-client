import React, { useEffect } from "react";
import { connect } from "react-redux";

import StoreItem from "../store-item/store-item.component";

import { fetchAllByCategory } from "../../redux/stores/stores-action";

import "./collections.styless.scss";

const Collections = ({ match, stores, fetchAllByCategory }) => {
  console.log(match.params.categoryName);
  useEffect(() => {
    fetchAllByCategory(match.params.categoryName);
  }, [fetchAllByCategory, match.params.categoryName]);
  return (
    <div className="collections">
      {stores &&
        stores.map((store) => <StoreItem key={store.id} store={store} />)}
    </div>
  );
};
const mapStateToProps = (state) => ({
  stores: state.stores.stores,
});

const mapDispatchToprops = (dispatch) => ({
  fetchAllByCategory: (categoryName) =>
    dispatch(fetchAllByCategory(categoryName)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Collections);

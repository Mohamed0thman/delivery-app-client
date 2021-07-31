import React, { useEffect } from "react";
import { connect } from "react-redux";

import StoreItem from "../store-item/store-item.component";

import { fetchAllStores } from "../../redux/stores/stores-action";

import "./collections-overview.styless.scss";

const CollectionsOverView = ({ stores, fetchAllStores }) => {
  useEffect(() => {
    fetchAllStores();
  }, [fetchAllStores]);
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
  fetchAllStores: () => dispatch(fetchAllStores()),
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(CollectionsOverView);

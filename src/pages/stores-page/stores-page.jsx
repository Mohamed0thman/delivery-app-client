import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import StoreItem from "../../component/store-item/store-item.component";

import { fetchAllStores } from "../../redux/stores/stores-action";

import "./stores-page.scss";

const StoresPage = ({ stores, fetchAllStores }) => {
  useEffect(() => {
    fetchAllStores();
  }, [fetchAllStores]);

  console.log(stores);
  return (
    <div className="store-page">
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

export default connect(mapStateToProps, mapDispatchToprops)(StoresPage);

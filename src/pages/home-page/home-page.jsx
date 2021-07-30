import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Map from "../../component/map/map.component";

import { fetchAllStores } from "../../redux/stores/stores-action";

import "./home-page.scss";

const HomePage = ({ fetchAllStores, stores }) => {
  const [placedOrder, setPlacedOrder] = useState("");

  useEffect(() => {
    fetchAllStores();
  }, [fetchAllStores]);

  const handleOnChange = (data) => {
    setPlacedOrder(data.features[0].place_name);
  };

  return (
    <div>
      <Map stores={stores} handleOnChange={handleOnChange} />

      <input type="text" value={placedOrder} readOnly />
    </div>
  );
};

const mapStateToProps = (state) => ({
  stores: state.stores.stores,
});

const mapDispatchToprops = (dispatch) => ({
  fetchAllStores: () => dispatch(fetchAllStores()),
});

export default connect(mapStateToProps, mapDispatchToprops)(HomePage);

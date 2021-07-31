import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverView from "../../component/collections-overview/collections-overview.component";
import Collections from "../../component/collections/collections.component";

import "./stores-page.scss";

const StoresPage = ({ match }) => {
  return (
    <div>
      <Route exact path={match.url} component={CollectionsOverView} />
      <Route path={`${match.url}/:categoryName`} component={Collections} />
    </div>
  );
};

export default StoresPage;

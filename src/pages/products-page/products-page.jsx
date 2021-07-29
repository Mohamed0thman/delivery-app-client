import React, { useEffect } from "react";
import { connect } from "react-redux";

import ProductItem from "../../component/product-item/product-item.component";

import { fetchStoreProducts } from "../../redux/products/products-action";

import "./products-page.scss";

const ProductsPage = ({ match, products, fetchAllStores }) => {
  const storeName = match.params.storeName;
  useEffect(() => {
    fetchAllStores(storeName);
  }, [fetchAllStores, storeName]);
  return (
    <div className="products-page">
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToprops = (dispatch) => ({
  fetchAllStores: (storeName) => dispatch(fetchStoreProducts(storeName)),
});

export default connect(mapStateToProps, mapDispatchToprops)(ProductsPage);

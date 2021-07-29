import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import StoresPage from "./pages/stores-page/stores-page";
import ProductsPage from "./pages/products-page/products-page";

import { ToastContainer, Slide } from "react-toastify";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        transition={Slide}
      />

      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/stores">stores</Link>
        </li>{" "}
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/stores" component={StoresPage} />
        <Route path="/stores/:storeName" component={ProductsPage} />
      </Switch>
    </div>
  );
}

export default App;

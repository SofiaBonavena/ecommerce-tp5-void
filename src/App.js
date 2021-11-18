import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/Home.js";
import Navbar from "./components/NavBar/NavBar.js";
import Category from "./pages/Category.js";
import Product from "./pages/Product.js";
import Checkout from "./pages/Checkout.js";
import { CartProvider } from "./Contexts/CartContext.js";


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path={`/shop`}>
              <Category />
            </Route>
            <Route exact path={`/category/:catId`}>
              <Category />
            </Route>
            <Route exact path={`/product/:prodId`}>
              <Product />
            </Route>
            <Route exact path={`/checkout`}>
              <Checkout />
            </Route>
            <Route exact path={`/`}>
              <Home />
            </Route>
            <Route path="*">NOT FOUND</Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderComplete from './components/OrderComplete/OrderComplete';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ProductDetails from './components/ProductDetails/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/productDetails">
          <ProductDetails />
        </Route>
        <Route path="/placeOrder">
          <PlaceOrder />
        </Route>
        <Route path="/orderComplete">
          <OrderComplete />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
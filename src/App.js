import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderComplete from './components/OrderComplete/OrderComplete';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ProductDetails from './components/ProductDetails/ProductDetails'
import SingleFoodDetails from './components/SingleFoodDetails/SingleFoodDetails';

export const UserContext = createContext();

const App = () => {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
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
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/food/:id">
            <SingleFoodDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
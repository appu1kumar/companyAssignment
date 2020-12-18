import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Core/Home';
import Menu from './Core/Menu';
import Cart from './components/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

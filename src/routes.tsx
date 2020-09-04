import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Fatura from './pages/Fatura/index.js';
import Limite from './pages/Limite';
import Sonho from './pages/Sonho';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/menu" component={Menu} />
      <Route path="/fatura" component={Fatura} />
      <Route path="/limite" component={Limite} />
      <Route path="/sonho" component={Sonho} />
    </BrowserRouter>
  );
}

export default Routes;

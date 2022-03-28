import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routess() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

// desatualizei a versao do react-router-dom para a versao 5 para poder funcionar o switch

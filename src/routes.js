// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import { Video } from './pages';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/video" component={Video} />
  </Switch>
);

export default routes;

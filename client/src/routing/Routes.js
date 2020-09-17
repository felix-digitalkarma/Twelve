import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from '../components/HomeComponent';
const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeComponent} />
  </Switch>
);

export default Routes;

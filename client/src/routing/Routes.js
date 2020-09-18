import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
  </Switch>
);

export default Routes;

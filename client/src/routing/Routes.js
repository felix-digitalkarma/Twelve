import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import SurveyContainer from '../containers/SurveyContainer';
import RegisterComponent from '../components/auth/RegisterComponent';
import LoginComponent from '../components/auth/LoginComponent';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/register" component={RegisterComponent} />
    <Route path="/login" component={LoginComponent} />
    <Route path="/survey" component={SurveyContainer} />
  </Switch>
);

export default Routes;

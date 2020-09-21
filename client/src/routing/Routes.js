import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import SurveyContainer from '../containers/SurveyContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginComponent from '../components/auth/LoginComponent';

import AuthRoute from '../routing/AuthRoute';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <AuthRoute type="guest" path="/register" component={RegisterContainer} />
    <AuthRoute type="guest" path="/login" component={LoginComponent} />
    <AuthRoute type="admin" path="/survey" component={SurveyContainer} />
  </Switch>
);

export default Routes;

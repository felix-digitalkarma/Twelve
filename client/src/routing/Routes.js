import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import RegisterContainer from '../containers/RegisterContainer';
import LoginComponent from '../components/auth/LoginComponent';

import SurveyContainer from '../containers/SurveyContainer';

import DashboardContainer from '../containers/DashboardContainer';
import StoriesContainer from '../redux/modules/stories/containers/StoriesContainer';

import AuthRoute from '../routing/AuthRoute';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <AuthRoute type="guest" path="/register" component={RegisterContainer} />
    <AuthRoute type="guest" path="/login" component={LoginComponent} />
    <AuthRoute type="private" path="/results" component={SurveyContainer} />
    <AuthRoute type="private" path="/stories" component={StoriesContainer} />
    <AuthRoute type="admin" path="/dashboard" component={DashboardContainer} />
  </Switch>
);

export default Routes;

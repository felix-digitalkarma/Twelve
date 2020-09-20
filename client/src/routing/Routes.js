import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';
import Register from '../components/auth/Register';

import SurveyContainer from '../containers/SurveyContainer';

// Take survey button click should take user to '/survey'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/register" component={Register} />
    <Route path="/survey" component={SurveyContainer} />
  </Switch>
);

export default Routes;

import React from 'react';
import { Router } from '@reach/router';

import Home from './hooks/home';
import Test from './hooks/test';
import Stories from './hooks/stories';

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Test path="test" />
      <Stories path="stories" />
    </Router>
  )
}



export default Routes;
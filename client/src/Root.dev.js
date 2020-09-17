import React, { Fragment } from 'react';
import Routes from './routing/Routes';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes />
    </Fragment>
  );
};

export default App;

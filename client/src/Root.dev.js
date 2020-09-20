import React, { Fragment } from 'react';
import Routes from './routing/Routes';
import NavBar from './components/navigation/NavBar';
import Footer from './components/navigation/Footer';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;

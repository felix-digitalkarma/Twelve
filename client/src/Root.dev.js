import React, { Fragment } from 'react';
import Routes from './routing/Routes';
import NavBarContainer from './containers/NavBarContainer';
import Footer from './components/navigation/Footer';
import AlertsContainer from './redux/modules/alerts/containers/AlertsContainer';

const App = () => {
  return (
    <Fragment>
      <AlertsContainer />
      <NavBarContainer />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;

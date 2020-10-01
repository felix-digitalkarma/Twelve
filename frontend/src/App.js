import React from 'react';

import AuthContextProvider from './contexts/AuthContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import GlobalContextProvider from './contexts/GlobalContextProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';

const App = () => {
  return (
    <GlobalContextProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes />
        </AuthContextProvider>
        <Footer />
      </ThemeContextProvider>
    </GlobalContextProvider>
  );
}

export default App;

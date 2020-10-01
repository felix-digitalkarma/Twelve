import React from 'react';

import AuthContextProvider from './contexts/AuthContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import GlobalContextProvider from './contexts/GlobalContextProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';
import StoryContextProvider from './contexts/StoryContextProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar />
        <GlobalContextProvider>
          <StoryContextProvider>
            <Routes />
          </StoryContextProvider>
        </GlobalContextProvider>
      </AuthContextProvider>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;

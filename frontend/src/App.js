import React from 'react';
import { Router } from '@reach/router';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './hooks/home';
import Stories from './hooks/stories';

const App = () => {

  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Stories path="stories" />

      </Router>
      <Footer />
    </div>

  );
}

export default App;

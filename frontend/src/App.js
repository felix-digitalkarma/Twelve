import React from "react";
import { Router } from "@reach/router";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./hooks/landing";
import Stories from "./hooks/stories";
import Register from "./hooks/register";
import Login from "./hooks/login";
import AddStory from "./hooks/add-story";
import Personas from "./hooks/personas";

import { AuthContainer } from "./contexts/auth";

const App = () => {
  return (
    <AuthContainer isGlobal>
      <HelmetProvider>
        <Navbar />
        <Router>
          <Landing path="/" />
          <Stories path="stories" />
          <Personas path="personas" />
          <Register path="register" />
          <Login path="login" />
          <AddStory path="/add-story" />
        </Router>
        <Footer />
      </HelmetProvider>
    </AuthContainer>
  );
};

export default App;

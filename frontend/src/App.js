import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./hooks/home";
import Stories from "./hooks/stories";
import Register from "./hooks/register";
import Login from "./hooks/login";
import AddStory from "./hooks/add-story";
import Personas from "./hooks/personas";

import { AuthContainer } from "./contexts/auth";

const App = () => {
  return (
    <AuthContainer isGlobal>
      <Navbar />
      <Router>
        <Home path="/" />
        <Stories path="stories" />
        <Personas path="personas" />
        <Register path="register" />
        <Login path="login" />
        <AddStory path="/add-story" />
      </Router>
      <Footer />
    </AuthContainer>
  );
};

export default App;

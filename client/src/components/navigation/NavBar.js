import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-xl">
        <a className="navbar-brand" href="/"><i className="fas fa-fire mr-10"></i>Twelve.Community</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarmenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/felixmontanez/" target="_blank">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/felix-digitalkarma/Twelve" target="_blank">Github</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true" target="_blank">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

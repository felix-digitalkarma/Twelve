import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-xl">
        <a className="navbar-brand" href="#"><i className="fas fa-fire mr-10"></i>Twelve.Community</a>
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
              <a className="nav-link" href="mailto:felix.montanez@gmail.com?subject=Inquiry from Twelve" tabIndex="-1" aria-disabled="false" target="_blank">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

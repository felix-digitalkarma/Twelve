import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-none">
      <a className="navbar-brand" href="#">
        <i class="fas fa-fire mr-10"></i>Twelve.Community</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="https://www.linkedin.com/in/felixmontanez/" target="_blank">LinkedIn</a>
          <a className="nav-link" href="https://github.com/felix-digitalkarma/Twelve" target="_blank">Github</a>

        </div>
      </div>
    </nav>
  )
}

export default NavBar;

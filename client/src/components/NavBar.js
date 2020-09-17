import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Twelve.Community</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link" href="#">LinkedIn</a>
          <a className="nav-link" href="#">Github</a>
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

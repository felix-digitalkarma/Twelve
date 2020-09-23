import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Modal from '../partials/Modal.Component';
import Login from '../auth/LoginComponent';

const NavBar = (props) => {
  const {
    modal,
    showModal,
    hideModal,
    auth,
    login,
    logout,
    getAuth,
  } = props;

  const { isAuthenticated, user } = auth;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    hideModal();
  };

  useEffect(() => {
    getAuth();
  }, [getAuth]);
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-xl">
        <a className="navbar-brand" href="/"><i className="fas fa-fire mr-10"></i>Twelve.Community</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarmenu">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/stories">User Stories</Link>
            </li>
            {isAuthenticated ? (
              <Fragment>
                {isAuthenticated && user && user.role === 2 && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/results">Survey Results</Link>
                  </li>
                )}

                {isAuthenticated && user && user.role === 1 && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </li>
                )}
                <li className="nav-item">
                  {user && (
                    <span className="nav-link">Hi {user.firstName}.</span>)}
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={e => handleLogout(e)}>Logout</div>
                </li>
              </Fragment>
            ) : (
                <Fragment>
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
                    <Modal show={modal.show} handleClose={hideModal}>
                      <Login
                        login={login}
                        isAuthenticated={isAuthenticated}
                        user={user}
                      />
                    </Modal>
                    <div
                      className="nav-link"
                      onClick={showModal}
                    >
                      <span>Login</span>
                    </div>
                  </li>
                </Fragment>
              )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

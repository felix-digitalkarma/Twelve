import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container-xl">
        <a class="navbar-brand" href="#"><i class="fas fa-fire mr-10"></i>Twelve.Community</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarmenu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/felixmontanez/" target="_blank">LinkedIn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/felix-digitalkarma/Twelve" target="_blank">Github</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:felix.montanez@gmail.com?subject=Inquiry from Twelve" tabindex="-1" aria-disabled="false" target="_blank">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;

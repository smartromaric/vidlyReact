import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Vidly</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink className="nav-link" to="/movies">Movies</NavLink>
      </li>
      <li class="nav-item ">
        <NavLink className="nav-link" to="/customers">Customers </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>
  )
}

export default NavBar
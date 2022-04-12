import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/homeComp" className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/homeComp" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/classComp" class="nav-link">Counter</Link>
        </li>
        <li className="nav-item">
          <Link to="/listkeys" class="nav-link">ListsKeys</Link>
        </li>
        <li className="nav-item">
          <Link to="/contactus" class="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/classlifecycle" class="nav-link">User</Link>
        </li>
        <li className="nav-item">
          <Link to="/table" class="nav-link">Dynamic Table</Link>
        </li>
        <li className="nav-item">
          <Link to="/pagination" class="nav-link">Pagination</Link>
        </li>
        <li className="nav-item">
          <Link to="/usestate" class="nav-link">UseStateHook</Link>
        </li>
        <li className="nav-item">
          <Link to="/useeffect" class="nav-link">Todo</Link>
        </li>
        <li className="nav-item">
          <Link to="/useeffectpagination" class="nav-link">UseEffectPagination</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Header
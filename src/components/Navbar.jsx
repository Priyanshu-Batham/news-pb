import React from "react";
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{width: '100px'}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to='/'>
              Home
            </Link>
            <Link className="nav-link active" aria-current="page" to='/news'>
              News
            </Link>
            <Link className="nav-link active" aria-current="page" to='/about'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

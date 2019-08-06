/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import '../layout/styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark">
        <div className="container">
          <div className="justify-content-start">
            <Link to="/" className="navbar-brand">HK's Portfolio <i className="fas fa-code"></i></Link>
          </div>
          <div className="justify-content-end">
            <ul className="navbar-nav flex-row">
              <li className="nav-item dropdown ml-3 logged-in">
                <span className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Take a Look At My Projects
                  </span>
                <div className="dropdown-menu dropdown-menu-center" aria-labelledby="navbarDropdown">
                  <Link to="/todo" className="dropdown-item">Todo List</Link>
                  <Link to="/chat" className="dropdown-item">Live Chat</Link>
                  <Link to="/clock" className="dropdown-item">Clock</Link>
                  <Link to="/calc" className="dropdown-item">Calc</Link>
                  <Link to="/quiz" className="dropdown-item">Quiz</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
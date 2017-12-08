import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar  navbar-fixed-top">
    <section>
      <h3 className="navbar-brand">
        Margaret Hamilton Interplanetary Academy of JavaScript
      </h3>
      <div id="navbar">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/students">STUDENTS</Link>
          </li>
        </ul>
      </div>
    </section>
  </nav>
  )
}


export default Header;


import React from 'react';
import { Link } from 'react-router-dom';

const divStyle={
  background: "#202A59",
  padding: "20px",
  margin: "0 auto",
  "font-family" : "Helvetica, sans-serif",
  color: "#FFFFFF"
}

const Header = () => {

  return (
    <nav style={divStyle} className="navbar  navbar-fixed-top">
    <section>
      <h1 className="name">
        Margaret Hamilton Interplanetary Academy of JavaScript
      </h1>
      <div id="navbar"  >
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
          <Link to="/">CAMPUSES</Link>
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


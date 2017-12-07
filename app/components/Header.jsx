import React from 'react';

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
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">STUDENTS</a>
          </li>
        </ul>
      </div>
    </section>
  </nav>
  )
}


export default Header;


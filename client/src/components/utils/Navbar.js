import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar blue">
      <div className="container">
        <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i> TodoApp</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-menu">
          <ul className="menu">
            <li className="menu-item">
              <a className="menu-link" href="/todo">Home</a>
            </li>
            <li className="menu-item">
              <a className="nav-link" href="/other">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
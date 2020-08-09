import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

import logo from '../images/logoTWO.png'
import ticket from '../images/ticket.svg'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-container">
        <NavLink to="/">
          <img className="Header-logo" src={logo} alt="The Wild Orchestra" />
        </NavLink>
        <nav className="Header-navbar">
          <NavLink to="/agenda" activeClassName="active">
            AGENDA
          </NavLink>
          <NavLink to="/musiciens" activeClassName="active">
            MUSICIENS
          </NavLink>
        </nav>
        <img className="Header-tickets" src={ticket} alt="Tickets" />
      </div>
    </div>
  )
}

export default Header

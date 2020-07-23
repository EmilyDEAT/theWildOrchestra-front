import React from 'react'

import './Header.css'

import logo from '../images/logoTWO.png'
import ticket from '../images/ticket.svg'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-container'>
        <img className='Header-logo' src={logo} alt='The Wild Orchestra'/>
        <nav className='Header-navbar'>
          <a>AGENDA</a>
          <a>MUSICIENS</a>
        </nav>
        <img className='Header-tickets' src={ticket} alt='Tickets'/>
      </div>
    </div>
  )
}

export default Header
import React from 'react'

import Agenda from './Agenda'
import Header from './Header'
import Presentation from './Presentation'

import './PrincipalPage.css'

const PrincipalPage = () => {
  return (
    <div className='PrincipalPage-container'>
      <Header />
      <Presentation />
      <Agenda />
    </div>
  )
}

export default PrincipalPage